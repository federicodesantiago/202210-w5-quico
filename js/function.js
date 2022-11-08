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

export { arrayLength, arrayPush, arrayPop };
