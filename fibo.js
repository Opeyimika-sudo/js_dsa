function fibo(n){
    let fib = [0, 1]
    for (i = 2; i < n; i++){
        fib[i] = fib[i-2] + fib[i-1]
    }
    return fib;
}