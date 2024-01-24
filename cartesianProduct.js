function cartesianProduct(arr1, arr2){
    let newArray = []
    for(let i=0; i< arr1.length; i++){
        for(let j=0; j <arr2.length; j++){
            newArray.push([arr1[i], arr2[j]])
        }
    }
    return newArray
}

console.log(cartesianProduct([1,2], [2,3, 4, 5, 6]))