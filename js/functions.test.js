import {
    arrayLength,
    arrayPush,
    arrayPop,
    arrayUnshift,
    arrayShift,
    arraySome,
    arrayEvery,
} from './function.js';

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

//Testing array.shift

const dataShift = [1, 2, 3, 4];
const dataShiftTest = [2, 3, 4];

describe(`When argument is the array: ${dataShift}`, () => {
    test(`Then the result should be ${dataShiftTest}`, () => {
        const r = arrayShift(dataShift);
        expect(r).toEqual(dataShiftTest);
    });
    test(`Then the result should be ${arrayLength(dataShift)}`, () => {
        const r2 = arrayLength(dataShift);
        expect(r2).toBe(dataShift.length);
    });
});

//Testing array.some

const dataSome = [1, 2, 3, 4, true, {}];
let k;
function dataFunction(element) {
    k = element * 5 === 1000;
    return k;
}

describe(`When argument is the array: ${dataSome} and the function is dataFunction`, () => {
    test(`Then the result should be ${dataSome.some(dataFunction)}`, () => {
        let results = arraySome(dataSome, dataFunction);
        let checkSomeResult;
        function checkSome(results) {
            results.forEach((item) => {
                if (item) {
                    checkSomeResult = true;
                }
                if (!item) {
                    checkSomeResult = false;
                }
            });
            return checkSomeResult;
        }
        const r = checkSome(results);
        expect(r).toBe(dataSome.some(dataFunction));
    });
});

//Testing array.every

const dataEvery = [2, 5, 2, 2, 2, 2];
let y;
function dataFunctionEvery(element) {
    y = element * 5 === 10;
    return y;
}

describe(`When argument is the array: ${dataEvery} and the function is dataFunctionEvery`, () => {
    test(`Then the result should be ${dataEvery.every(
        dataFunctionEvery
    )}`, () => {
        let results = arrayEvery(dataSome, dataFunctionEvery);
        let checkEveryResult;
        function checkEvery(results) {
            for (let i = 0; i <= arrayLength(results); i++) {
                if (results[i]) {
                    checkEveryResult = true;
                }

                if (!results[i]) {
                    checkEveryResult = false;
                    break;
                }
            }
            return checkEveryResult;
        }
        const r = checkEvery(results);
        expect(r).toBe(results.every(dataFunctionEvery));
    });
});
