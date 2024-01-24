// function recursiveFibonacci(n){
//     let initArray = [0, 1]

//     for (let i = 2; i <= n; i++){
//         initArray[i] = initArray[i-2] + initArray[i-1]  
//     }
//     console.log(initArray[initArray.length - 1])
// }

// recursiveFibonacci(10)

function recursiveFibonacci(n){
    if (n < 2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(6))
