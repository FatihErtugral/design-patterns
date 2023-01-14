import Application from './Application';
import Command from './Command';
import Editor from './Editor';

export default class CopyCommand extends Command {
    constructor(app: Application, editor: Editor) {
        super(app, editor);
    }
    public execute() {
        this.app.clipboard = this.editor.getSelection();

        return false;
    }
}