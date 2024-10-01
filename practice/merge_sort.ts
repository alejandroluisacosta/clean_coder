const mergeSort = (arr: number[]) => {
    let len: number = Math.floor(arr.length);
    const newArr: number[] = [];
    const leftHalf: number[] = [];
    const rightHalf: number[] = [];
    for (let i = 0; i < len / 2; i++) {
        leftHalf[i] = arr[i];
    }
    for (let i = len / 2; i < len; i++) {
        rightHalf[i] = arr[i];
    }
    if (len / 2 > 1) {
        mergeSort(leftHalf);
        mergeSort(rightHalf);
    }
    // WHY INFINITE LOOP?
    let i = 0;
    let j = 0;
    let newArrPosition = 0;
    while (i < leftHalf.length) {
        while (j < rightHalf.length) {
            if (leftHalf[i] < rightHalf[j] || !rightHalf[j]) {
                newArr[newArrPosition] = leftHalf[i];
                console.log(i, newArrPosition)
                newArrPosition++;
                i++
            } else if (rightHalf[j] < leftHalf[i] || !leftHalf[i]) {
                newArr[newArrPosition] = rightHalf[j];
                newArrPosition++;
                j++;
            }
        }
    }
    while (j < rightHalf.length) {
        newArr[newArrPosition] = rightHalf[j];
        newArrPosition++;
        j++;
    }
    return newArr;
}

const testArr = [5, 4, 6, 8]

console.log(mergeSort(testArr));