import * as vscode from 'vscode';
import replaceLineWIthClipboard from './replaceLine'

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "replace-line-with-clipboard" is now active!');

	let ext = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Replacing Line with clipboard!');
		if (vscode.window.activeTextEditor !== undefined){
			const textEditor = vscode.window.activeTextEditor;
			replaceLineWIthClipboard(textEditor);
		} 
	});

	context.subscriptions.push(ext);
}

export function deactivate() {}
