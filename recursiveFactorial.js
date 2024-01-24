function recursiveFactorial(n){
    if (n <= 1){
        return 1
    }
    return recursiveFactorial(n-1) * n
}

console.log(recursiveFactorial(5))