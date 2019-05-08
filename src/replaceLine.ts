import * as vscode from 'vscode';
import { TextDocument, Selection, TextLine, Range, Position} from "vscode";

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
                    //maintain tabbing
                    const cursorPos : Position = cursorSelection.active;
                    const cursorIdx : number = cursorPos.character;

                    let prev = "";
                    for (let i = 0; i < cursorIdx; ++i){
                        prev += line.text[i];
                    }

                    const replacement : string = prev + clipboard

                    editBuilder.replace(lineRange, replacement)
                }
            });
        })
}