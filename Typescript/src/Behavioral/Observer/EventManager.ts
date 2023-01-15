interface EventType {
    'open': (...args: any[]) => void
    'close': (...args: any[]) => void 
}

class EventManager {
    private listeners: {
        name: keyof EventType;
        listener: EventType[keyof EventType];
    }[] = [];

    // subscribe
    on = <E extends keyof EventType>(name: E, listener: EventType[E]) => {
        this.listeners.push({ name, listener });
    };
    // unsubscribe
    off = <E extends keyof EventType>(name: E, listener: EventType[E]) => {
        const index = this.listeners.findIndex((event) => {
            return event.name === name && event.listener === listener;
        });

        this.listeners.splice(index, 1);
    };
    // notify
    emit = <E extends keyof EventType>(name: E, ...args: Parameters<EventType[E]>) => {
        this.listeners.forEach((event) => {
            if (event.name === name) {
                event.listener(...args);
            }
        });
    };
}

const eventManager = new EventManager();

eventManager.on('open', (data) => {
    const out = document.querySelector('.oberver-event-manager-out');

    document.body.style.backgroundColor = 'purple';

    if (out) {
        out.innerHTML += '\n'+ data;
    }
});

eventManager.on('close', (data) => {
    const out = document.querySelector('.oberver-event-manager-out');

    document.body.style.backgroundColor = 'darkgray';

    if (out) {
        out.innerHTML += '\n' + data;
    }
});

const unsubscribeTest = () => {
    console.log('this one works once');
};

eventManager.on('open', unsubscribeTest);
eventManager.emit('open', 'open event triggered');
eventManager.off('open', unsubscribeTest);

setTimeout(() => {
    eventManager.emit('open', 'open event triggered');
}, 1000);

setTimeout(() => {
    eventManager.emit('close', 'close event triggered');
}, 2000);
