import Command from './Command';
import CommandHistory from './CommandHistory';
import CopyCommand from './CopyCommand';
import CutCommand from './CutCommand';
import Editor from './Editor';
import PasteCommand from './PasteCommand';

export default class Application {
    private _clipboard!: DocumentFragment;
    private undoHistory: CommandHistory;
    private activeEditor!: Editor;

    constructor () {
        this.undoHistory = new CommandHistory();
        this.clipboard = new DocumentFragment();
        this.activeEditor = new Editor();
    }

    public get clipboard(): DocumentFragment {
        return this._clipboard.cloneNode(true) as DocumentFragment;
    }
    public set clipboard(value: DocumentFragment) {
        this._clipboard = value;
    }

    createUI = () => {
        const $copy = document.createElement('button');
        const $paste = document.createElement('button');
        const $cut = document.createElement('button');
        const $undo = document.createElement('button');

        const copyHandler = () => {
            this.executeCommand(new CopyCommand(this, this.activeEditor));
        }
        const pasteHandler = () => {
            this.executeCommand(new PasteCommand(this, this.activeEditor));
        }
        const cutHandler = () => {
            this.executeCommand(new CutCommand(this, this.activeEditor));
        }

        $paste.addEventListener('click', pasteHandler);
        $copy.addEventListener('click', copyHandler);
        $cut.addEventListener('click', cutHandler);
        $undo.addEventListener('click', this.undo);

        $copy.innerText = 'copy';
        $paste.innerText = 'paste';
        $cut.innerText = 'cut';
        $undo.innerText = 'undo';

        document.addEventListener('keyup', ({ key, ctrlKey }) => {
            switch (key) {
                case 'x': {
                    if (ctrlKey) {
                        cutHandler();
                    }

                    break;
                }

                case 'c': {
                    if (ctrlKey) {
                        copyHandler();
                    }
                }
                default:
                    break;
            }
        });

        document.body.prepend($copy, $paste, $cut, $undo);
    }

    executeCommand = (command: Command) => {
        if (command.execute()) {
            this.undoHistory.push(command);
        }
    }

    undo = () => {
        const command = this.undoHistory.pop();

        if (command) {
            command.undo();
        }
    }
}

const app = new Application();
app.createUI();
