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
    //const dataPop = [];
    //let k = 0;
    // while (k <= x - 2) {
    //     arrayPush(dataPop, arr[k]);
    //     k++;
    //}
    let x = arrayLength(arr);
    let result = arr[x - 1];
    return result;
}

export { arrayLength, arrayPush, arrayPop };
