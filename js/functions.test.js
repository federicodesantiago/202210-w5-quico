import { arrayLength, arrayPush, arrayPop, arrayUnshift } from './function.js';

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

//Testing array.push()

const pushElement = [4, 5, undefined, null];

pushElement.forEach((data) => {
    describe(`When argument are ${data}`, () => {
        const dataPush = [1, 2, 3];
        test(`Then the result should be ${dataPush.length + 1}`, () => {
            const r = arrayPush(dataPush, data);
            expect(r).toBe(dataPush);
        });
    });
});

//Testing array.pop()

const popElement = [4, 5, 6, 7];
const popElementTest = [4, 5, 6, 7];
popElementTest.pop();

describe(`When argument are ${popElement}`, () => {
    test(`Then the result should be ${popElementTest}`, () => {
        const r = arrayPop(popElement);
        expect(r).toStrictEqual(popElementTest);
    });
    test(`Then the result should be ${arrayLength(popElement)}`, () => {
        const r2 = arrayLength(popElement);
        expect(r2).toBe(popElement.length);
    });
});

//Testing array.unshift

const unshiftElement = 4;
const dataUnshift = [1, 2, 3];

describe(`When argument are the element: ${unshiftElement} and the array: ${dataUnshift}`, () => {
    test(`Then the result should be ${arrayUnshift(
        dataUnshift,
        unshiftElement
    )}`, () => {
        const r = arrayUnshift(dataUnshift, unshiftElement);
        expect(r).toBe(dataUnshift);
    });
    test(`Then the result should be ${arrayLength(dataUnshift)}`, () => {
        const r2 = arrayLength(dataUnshift);
        expect(r2).toBe(dataUnshift.length);
    });
});
