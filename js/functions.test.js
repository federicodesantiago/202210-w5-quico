import { arrayLength, arrayPush, arrayPop } from './function.js';

//Testing array.length

const dataLength = [
    [1, 2, 3, 4, 5],
    ['a', 'hola', 89],
    [undefined, undefined, null, null],
    [{}, 2, null, 4],
];

dataLength.forEach((data) => {
    describe(`When argument are ${data}`, () => {
        test(`Then the result should be ${data.length}`, () => {
            const r = arrayLength(data);
            expect(r).toBe(data.length);
        });
    });
});

const pushElement = [4, 5, undefined, null];

pushElement.forEach((data) => {
    describe(`When argument are ${data}`, () => {
        const dataPush = [1, 2, 3];
        test(`Then the result should be ${dataPush}`, () => {
            const r = arrayPush(dataPush, data);
            expect(r).toBe(dataPush);
        });
    });
});

const popElement = [4, 5, 6, 7];

describe(`When argument are ${popElement}`, () => {
    test(`Then the result should be ${arrayPop(popElement)}`, () => {
        const r = arrayPop(popElement);
        expect(r).toBe(popElement);
    });
});
