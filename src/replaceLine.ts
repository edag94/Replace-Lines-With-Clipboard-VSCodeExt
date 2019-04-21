import * as vscode from 'vscode';
import { TextDocument, Selection, TextLine, Range, } from "vscode";

export default (editor: vscode.TextEditor) => {
    let selections: Selection[] = editor.selections;
    var doc: TextDocument = editor.document;

    vscode.env.clipboard.readText()
        .then( (clipboard : string) => {
            editor.edit(editBuilder => {
                for (const cursorSelection of selections){
                    const lineNumber : number = cursorSelection.active.line;
                    const line : TextLine = doc.lineAt(lineNumber);
                    const lineRange : Range = line.range;
                    
                    editBuilder.replace(lineRange, clipboard)
                }
            });
        })
}