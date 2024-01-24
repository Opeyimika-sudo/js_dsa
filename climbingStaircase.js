function climbingStaircase(n){
    if (n == 1){
        return 1
    }
    else if (n == 2){
        return 2
    }

    let climbingStairs = climbingStaircase(n-1) + climbingStaircase(n-2)
    return climbingStairs
}

console.log(climbingStaircase(4))