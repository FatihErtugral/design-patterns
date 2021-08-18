export const throttle = (callback: (...params: any[]) => void, limit:number) => {
    let isTimeout = false;

    return function (this:any, ...args: any[]) {
        if (!isTimeout) {
            isTimeout = true;

            callback.apply(this, args);
            setTimeout(() => (isTimeout = false), limit);
        }
    };
};