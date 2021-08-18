import { throttle } from '../src/Thorottle';

describe('throttle', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    it('it $todo 2', () => {
        const func = jest.fn();
        const throttleFunc = throttle(func, 250);
        
        for (let i = 0; i < 10; i++) {
            throttleFunc();
        }

        expect(func).toBeCalledTimes(1);
        jest.advanceTimersByTime(249);
        throttleFunc();
        expect(func).toBeCalledTimes(1);
        jest.advanceTimersByTime(250);
        expect(func).toBeCalledTimes(1);
        throttleFunc();
        expect(func).toBeCalledTimes(2);
    });

    it('it $todo', () => {
        let expected = null;
        const setExpected = (param: string) => { expected = param };
        const debounceFunc = throttle(setExpected, 250);

        debounceFunc('test-1');
        jest.advanceTimersByTime(250);
        expect(expected).toBe('test-1');
    });
});