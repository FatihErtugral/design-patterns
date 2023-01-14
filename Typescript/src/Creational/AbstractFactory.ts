export interface IButton {
    paint(): string;
}

export interface ICheckbox {
    paint(): string;
}

export class WinButton implements IButton {
    paint(): string {
        return 'Render a button in Windows style.';
    }
}

export class MacButton implements IButton {
    paint(): string {
        return 'Render a button in macOS style.';
    }
}

export class WinCheckbox implements ICheckbox {
    paint(): string {
        return 'Render a checkbox in Windows style.';
    }
}

export class MacCheckbox implements ICheckbox {
    paint(): string {
        return 'Render a checkbox in macOS style.';
    }
}

export interface IGUIFactory {
    createButton(): IButton;
    createCheckbox(): ICheckbox;
}

export class WinFactory implements IGUIFactory {
    createButton(): IButton {
        return new WinButton();
    }
    createCheckbox(): IButton {
        return new WinCheckbox();
    }
}

export class MacFactory implements IGUIFactory {
    createButton(): IButton {
        return new MacButton();
    }
    createCheckbox(): IButton {
        return new MacCheckbox();
    }
}

export class Client {
    private factory: IGUIFactory;
    private button!: IButton;
    private checkbox!: ICheckbox;

    constructor (factory: IGUIFactory) {
        this.factory = factory;
    }

    createUI() {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckbox();
    }

    paint() {
        this.button.paint();
        this.checkbox.paint();
    }
}