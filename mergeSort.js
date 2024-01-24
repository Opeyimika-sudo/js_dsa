// function mergeSort(arr){
//     //divide the arr into sub arrays where each subarray contains just one item
//     //merge the arrays together
//     let smallestArray = []
//     if (arr.length == 1){
//         smallestArray.push(arr)
//         return arr;
//     }

//     let leftArr = []
//     let rightArr = []
//     let middlePoint = Math.round(arr.length/2)
//     for (let i = 0; i < arr.length; i++){
//         if(i < middlePoint){
//             leftArr.push(i)
//         }
//         else {
//             rightArr.push(i)
//         }
//     }
//     mergeSort(leftArr)
//     mergeSort(rightArr)
// }

// // function compareSmallest(arr){

// // }

function mergeSort(arr){
    if(arr.length <2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const leftArr= arr.slice(0, mid)
    const rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr){
    console.log(leftArr, rightArr)
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }
        else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

console.log(mergeSort([-6, 20, 8, -2, 4, 2, 90,8]))