const $displaySmart = document.querySelector('.proxy-smart') as HTMLElement;
const data = {
    name: 'Fatih',
    surname: 'Ertuğral',
};

const smartProxy: { [key: string]: any } = new Proxy(data, {
    get(target, prop, receiver) {
        $displaySmart.innerHTML += '\na value has been read';
        
        return Reflect.get(target, prop, receiver);
    },

    set(target, prop, newValue, receiver) {
        const hasOwn = Object.hasOwn(target, prop);
        
        if (hasOwn && target[prop as keyof typeof data] === newValue) {
            $displaySmart.innerHTML += '\nsame value sent';

            return true;
        }

        if (hasOwn) {
            $displaySmart.innerHTML += '\na value has been changed';
        } else {
            $displaySmart.innerHTML += '\na new value has been added';
        }

        return Reflect.set(target, prop, newValue, receiver);
    },

    deleteProperty(target, p) {
        $displaySmart.innerHTML += '\na value has been deleted';

        return Reflect.deleteProperty(target, p);
    }
});

smartProxy.name;
smartProxy.name = 'Fatih';
smartProxy.name = 'Fatih2';
smartProxy.nam2 = 'Fatih2';
delete smartProxy.nam2;