import Application from './Application';
import Command from './Command';
import Editor from './Editor';

export default class CutCommand extends Command {
    constructor(app: Application, editor: Editor) {
        super(app, editor);
    }
    public execute() {
        this.saveBackup();
        this.app.clipboard = this.editor.getSelection();
        this.editor.deleteSelection();

        return true;
    }
}