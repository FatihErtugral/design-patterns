import type Application from './Application';
import type Editor from './Editor';
import Command from './Command';

export default class UndoCommand extends Command {
    constructor(app: Application, editor: Editor) {
        super(app, editor);
    }
    public execute() {
        this.app.undo();

        return false;
    }
}