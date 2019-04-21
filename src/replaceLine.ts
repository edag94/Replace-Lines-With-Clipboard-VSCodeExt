import * as vscode from 'vscode';
import { Disposable, TextEditor, TextDocument, Selection, TextEditorEdit, TextLine, Range, Position, Clipboard } from "vscode";


export default (editor: vscode.TextEditor) : void => {
	let selections: Selection[] = editor.selections;
    var doc: TextDocument = editor.document;
    
    editor.edit((edit: TextEditorEdit): void => {
        selections.forEach((selection: Selection, index: number) => {
            for (let i = selection.start.line; i <= selection.end.line; i++) {
                let selLine: TextLine = doc.lineAt(i);
                let lineRange: Range = selLine.range;
                let lineText: string = selLine.text;
                vscode.env.clipboard.readText()
                    .then(clipboard => {
                        if (clipboard === undefined || clipboard === null) {
                            vscode.window.showInformationMessage('Nothing currently saved to clipboard!');
                        }
                        else
                            try{
                                edit.replace(lineRange, clipboard)
                            }
                            catch (e){
                                console.log(e);
                            }
                    });
            }
        });
    })
}