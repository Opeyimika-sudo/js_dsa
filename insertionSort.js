function insertionSort(arr){
    let temp = 0;

    for (let i=0; i<arr.length; i++){
        for (let j = 1; j < arr.length; j++){
            if(arr[j-1] > arr[j]){
                temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
    }
    return arr;
}

console.log(insertionSort([-6, 20, 8, -2, 4]))