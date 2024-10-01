const bubbleSort = (arr: number[]) => {
    let swipeCounter: number = 1;
    let len: number = arr.length;
    let temp: number = -1;
    while (swipeCounter !== 0) {
        swipeCounter = 0;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swipeCounter++;
            }
        }
        len--;
    }
    return arr;
}

const testArrays = [
    // Unsorted Array
    [7, 3, 5, 2, 9],
  
    // Already Sorted Array
    [1, 2, 3, 4, 5],
  
    // Reverse Sorted Array
    [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  
    // Array with Duplicates
    [4, 2, 2, 5, 3, 1, 4, 5, 1, 3, 2, 5, 4, 3, 1, 2, 5, 4, 3, 1],
  
    // Random Array with 20 Elements
    [12, 7, 19, 3, 15, 4, 10, 2, 18, 8, 16, 6, 13, 1, 11, 20, 9, 14, 5, 17]
  ];


for (let i = 0; i < testArrays.length; i++) {
    console.log(bubbleSort(testArrays[i]));
}


// "PRACTICE HARD AND YOU SHALL BECOME A CLEAN CODER" //

const bubbleSort1 = (arr: number[]) => {
    let swipeCounter: number = 1;
    let len: number = arr.length;
    let temp: number = -1;
    while(swipeCounter !== 0) {
        swipeCounter = 0;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr [i + 1] = temp;
                swipeCounter;
            }
        }
        len--;
    }
    return arr;
}

for (let i = 0; i < testArrays.length; i++) {
    console.log(bubbleSort(testArrays[i]));
}
