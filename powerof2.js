// function powerof2(n){
//     if (Math.log2(n) % 1 === 0){
//         console.log(true);
//          return true
//     }
//     console.log(false)
//     return false
// }

// powerof2(1)
// powerof2(2)
// powerof2(5)

// function isPowerOfTwo(n){
//     if ( n < 1){
//         return false;
//     }
//     while (n > 1){
//         if ( n % 2 !== 0){
//             return false
//         }
//         n = n/2
//     }
//     return true
// }

function isPowerOfTwoBitwise(n){
    if(n < 1){
        return false
    }
    return (n & (n-1)) === 0
}
