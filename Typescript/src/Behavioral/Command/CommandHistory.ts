import Command from './Command';

export default class CommandHistory {
    private history: Command[] = [];

    push(c: Command) {
        this.history.push(c);
    }

    pop() {
        return this.history.pop();
    }
}