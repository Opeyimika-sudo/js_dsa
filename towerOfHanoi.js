function towersOfHanoi(n, A, B,C){
    if(n> 0){
        towersOfHanoi(n-1, A, C, B)
        console.log(`${A} -> ${C}`)
        towersOfHanoi(n-1, B, A, C)
    }
}

console.log(towersOfHanoi(3, 1, 2, 3))