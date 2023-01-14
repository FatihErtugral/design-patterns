import Application from './Application';
import Command from './Command';
import Editor from './Editor';

export default class PasteCommand extends Command {
    constructor(app: Application, editor: Editor) {
        super(app, editor);
    }
    public execute() {
        this.saveBackup();
        this.editor.deleteCurrentSelection();
        this.editor.removeAllRanges();
        this.editor.replaceSelection(this.app.clipboard);

        return true
    }
}