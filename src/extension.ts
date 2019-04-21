import * as vscode from 'vscode';
import replaceLineWithClipboard from './replaceLine';

export function activate(context: vscode.ExtensionContext) {

	const ext : vscode.Disposable = vscode.commands.registerCommand('extension.ReplaceLineWithClipboard', () => {
		if (vscode.window.activeTextEditor !== undefined){
			const activeTextEditor = vscode.window.activeTextEditor;
			replaceLineWithClipboard(activeTextEditor);
		} 
	});

	context.subscriptions.push(ext);
}

export function deactivate() {
	console.log(':(');
}
