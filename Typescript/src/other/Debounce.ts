export const debounce = (callback: (...params: any[]) => void, delay:number) => {
    let timeoutNo: ReturnType<typeof setTimeout>;

    return function (this:any, ...args: any[]) {
        clearTimeout(timeoutNo);

        timeoutNo = setTimeout(() => callback.apply(this, args), delay);
    };
};