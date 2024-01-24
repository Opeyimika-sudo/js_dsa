function bubbleSort(n){
    
    let swapped
    do {
        swapped = false
        for (let i = 0; i < n.length - 1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        } 
}while(swapped)
}

console.log(bubbleSort([-6, 20, 8, -2, 4]))