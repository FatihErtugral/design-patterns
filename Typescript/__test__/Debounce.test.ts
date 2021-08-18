import { debounce } from '../src/Debounce';

describe('debounce', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    it('should only run 250ms after the last trigger and function must be triggered 11 times.', () => {
        const func = jest.fn();
        const debounceFunc = debounce(func, 250);
        
        for (let i = 0; i < 10; i++) {
            debounceFunc();
        }

        expect(func).toBeCalledTimes(0);
        jest.advanceTimersByTime(249);
        debounceFunc();
        expect(func).toBeCalledTimes(0);
        jest.advanceTimersByTime(250);
        expect(func).toBeCalledTimes(1);
    });

    it('it $todo', () => {
        let expected = null;
        const setExpected = (param: string) => { expected = param };
        const debounceFunc = debounce(setExpected, 250);

        debounceFunc('test-1');
        jest.advanceTimersByTime(250);
        expect(expected).toBe('test-1');
    });
});