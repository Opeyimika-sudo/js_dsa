// function binarySearch(n, t){
//     if (n[Math.ceil(n.length / 2)] === t){
//         return Math.ceil(n.length / 2)
//     }
//     else if (n[Math.ceil(n.length / 2)] > t){
//         for (let i = 0; i < Math.ceil(n.length / 2); i++){
//             if(n[i] === t ){
//                 return i 
//             }
//         }
//     }
//     else if (n[Math.ceil(n.length / 2)] < t){
//         for (let i = Math.ceil(n.length/2); i < n.length ; i++){
//             if(n[i] === t ){
//                 return i 
//             }
//         }
//     }
//     return -1
// }

function binarySearch(n, t){
    let leftIndex = 0;
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex){
        let middleIndex = Math.floor(leftIndex + rightIndex) /2
        if (target === arr[middleIndex]){
            return middleIndex
        }

        if (target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        }
        else {
            leftIndex = middleIndex + 1
        }
    }
    return -1;
}


console.log(binarySearch([-5, 2, 4, 6, 10], 10))
console.log(binarySearch([-5, 2, 4, 6, 10], 6))
console.log(binarySearch([-5, 2, 4, 6, 10], 20))