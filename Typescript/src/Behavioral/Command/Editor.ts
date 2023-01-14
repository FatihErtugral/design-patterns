export default class Editor {
    private readonly EDITABLE_CLASS = '.editable';
    private isSelectStart: Boolean = false;
    private range: Range;
    public text?: string;
    public $editable: HTMLElement;

    constructor() {
        this.range = new Range();
        this.$editable = document.querySelector(this.EDITABLE_CLASS) as HTMLElement;

        this.$editable.addEventListener('selectstart', this.onSelectStart);
        document.addEventListener('mouseup', this.onSelectEnd);
    }

    destroy = () => {
        this.$editable.removeEventListener('selectstart', this.onSelectStart);
        document.removeEventListener('mouseup', this.onSelectEnd);
    }

    onSelectStart = () => {
        this.isSelectStart = true;
    }

    onSelectEnd = () => {
        if (!this.isSelectStart) {
            return;
        }

        this.isSelectStart = false;

        const selection = window.getSelection();

        if (!selection) {
            return;
        }

        this.range = selection.getRangeAt(0);
        this.text = this.$editable.innerHTML;
    };

    setRange = (range: Range) => {
        this.range = range;
    }

    getSelection = () => {
        return this.range.cloneContents();
    }

    deleteSelection = () => {
        this.range.deleteContents();
        this.range.endContainer.parentElement?.focus();
    }

    removeAllRanges = () => {
        window.getSelection()?.removeAllRanges();
    }

    deleteCurrentSelection = () => {
        const selection = window.getSelection();

        if (!selection || selection.rangeCount === 0) {
            return;
        }

        const range = selection.getRangeAt(0);

        range.deleteContents();
    }

    replaceSelection = (content: DocumentFragment) => {
        this.range.insertNode(content);
    }
}