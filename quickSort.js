// function quickSort(arr){
//     sortByRecursion(arr, firstIndex, lastIndex)
    
// }

// function sortByRecursion(arr){
//     let firstIndex = 0
//     let pivot = arr[arr.length - 1]
//     let leftArr = []
//     let rightArr = []

//     //how to run the recursion function for each new array

//     for(i = firstIndex; i < arr.length - 1; i++){
//             if(arr[i] <= pivot){
//                 leftArr.push(arr[i])
//             }
//             else {
//                 rightArr.push(arr[i])
//             }    
//         }
// }

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (let i = 0; i <arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([8, 20, -2, 4, -6]))