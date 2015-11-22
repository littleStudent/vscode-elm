import * as vscode from 'vscode';
import cp = require('child_process');
import path = require('path');
import os = require('os');
import fs = require('fs');

interface ICheckResult {
	tag: string;
	overview: string;
	subregion: string;
	details: string;
	region: {
		start: {
			line: number;
			column: number;
		}
		end: {
			line: number;
			column: number;
		}
	}
	type: string;
	file: string;
}


function checkForErrors(filename): Promise<ICheckResult[]> {
	return new Promise((resolve, reject) => {
		let cwd = path.dirname(filename)
		console.log('cwd', cwd)
		let cmd = 'elm-make ' + filename + ' --report=json --output /dev/null'
		cp.exec(cmd, { cwd: cwd }, (err, stdout, stderr) => {
			try {
				if (err && (<any>err).code == "ENOENT") {
					vscode.window.showInformationMessage("The 'elm-make' compiler is not available.  Install Elm from http://elm-lang.org/.");
					return resolve([]);
				}
				if (stderr) {
					let errorResult: ICheckResult = {
						tag: 'error',
						overview: '',
						subregion: '',
						details: stderr.toString(),
						region: {
							start: {
								line: 1,
								column: 1
							},
							end: {
								line: 1,
								column: 1
							}
						},
						type: 'error',
						file: filename
					}
					resolve([errorResult])
				}

				// console.log('stderror', stderr.toString());
				// console.log('stdout', stdout.toString());
				let lines: ICheckResult[] = JSON.parse(stdout.toString());
				resolve(lines);
			} catch (e) {
				reject(e);
			}
		});

	});
}


export function createDiagnostics(document: vscode.TextDocument) {
	if (document.languageId != "elm") {
		return;
	}
	let diagnostics: vscode.Diagnostic[] = [];
	let compileErrors = vscode.languages.createDiagnosticCollection("compile");
	let uri = document.uri;

	checkForErrors(uri.fsPath).then((compilerErrors) => {
		diagnostics = compilerErrors.map((error) => {
			let lineRange = new vscode.Range(
				error.region.start.line - 1,
				error.region.start.column - 1,
				error.region.end.line - 1,
				error.region.end.column - 1
				);
			return new vscode.Diagnostic(
				lineRange,
				error.overview + " - " + error.details.replace(/\[\d+m/g, ''),
				vscode.DiagnosticSeverity.Error);
		})
		compileErrors.set(document.uri, diagnostics);
	}, (error) => {
		compileErrors.set(document.uri, []);
	})
}