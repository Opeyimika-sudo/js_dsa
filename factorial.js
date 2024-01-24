function factorial(n){
    let sum = 1;
    for (i = 2; i <= n; i++){
        sum = sum * i;
    }
    return sum;
}

factorial(5)