//array.length

function arrayLength(arr) {
    let i = 0;
    arr.forEach(() => {
        i++;
    });
    return i;
}

//push

function arrayPush(dataPush, pushElement) {
    let j = arrayLength(dataPush);
    dataPush[j] = pushElement;
    return dataPush;
}

//pop

function arrayPop(arr) {
    const dataPop = [];
    let k = 0;
    let x = arrayLength(arr);
    while (k <= x - 2) {
        arrayPush(dataPop, arr[k]);
        k++;
    }
    return dataPop;
}

//unshift

function arrayUnshift(arr, unshiftElement) {
    for (let i = arrayLength(arr) - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = unshiftElement;
    return arr;
}

//shift

function arrayShift(arr) {
    for (let i = 1; i <= arrayLength(arr); i++) {
        arr[i - 1] = arr[i];
    }
    arrayPop(arr);
    return arr;
}

//some

function arraySome(arr, dataFunction) {
    const arrayCont = [];
    arr.forEach((item) => {
        arrayCont.push(dataFunction(item));
    });
    return arrayCont;
}

//every

function arrayEvery(arr, dataFunctionEvery) {
    let checkEveryResult;
    const arrayCont = [];
    arr.forEach((item) => {
        arrayCont.push(dataFunctionEvery(item));
    });
    for (let i = 0; i <= arrayLength(arrayCont) - 1; i++) {
        if (arrayCont[i]) {
            checkEveryResult = true;
        }
        if (!arrayCont[i]) {
            checkEveryResult = false;
            break;
        }
    }
    return checkEveryResult;
}

//find

function arrayFind(arr, dataFunctionFind) {
    let checkFindResult;

    for (let i = 0; i <= arrayLength(arr) - 1; i++) {
        if (!dataFunctionFind(arr[i])) {
            checkFindResult = undefined;
        }
        if (dataFunctionFind(arr[i])) {
            checkFindResult = arr[i];
            break;
        }
    }
    return checkFindResult;
}

export {
    arrayLength,
    arrayPush,
    arrayPop,
    arrayUnshift,
    arrayShift,
    arraySome,
    arrayEvery,
    arrayFind,
};
