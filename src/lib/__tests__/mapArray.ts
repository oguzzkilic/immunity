import mapArray from '../mapArray';

describe('mapArray', () => {
    test('basic', () => {
        const arr1 = [ 1, 2, 3, 4, 5 ];
        const func1 = x => x - 1;

        const result = mapArray(arr1, func1);

        expect(result).not.toBe(arr1);
        expect(result).toHaveLength(5);
        expect(result).toEqual([ 0, 1, 2, 3, 4 ]);
    });

    test('with generator', () => {
        const gen1 = function* () {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
            yield 5;
        };

        const func1 = x => x - 1;

        const result = mapArray(gen1(), func1);

        expect(result).toHaveLength(5);
        expect(result).toEqual([ 0, 1, 2, 3, 4 ]);
    });
});
