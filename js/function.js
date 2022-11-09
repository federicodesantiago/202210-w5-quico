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

export { arrayLength, arrayPush, arrayPop, arrayUnshift };
