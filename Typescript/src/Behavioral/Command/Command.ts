import Application from './Application';
import Editor from './Editor';

export default abstract class Command {
    protected app: Application;
    protected editor: Editor;
    protected backup?: string;

    constructor (app: Application, editor: Editor) {
        this.app = app;
        this.editor = editor;
    }

    saveBackup () {
        this.backup = this.editor.$editable.innerText;
    }

    undo() {
        this.editor.text = this.backup;
        this.editor.$editable.innerHTML = this.backup || '';
    }

    abstract execute(): boolean;
}