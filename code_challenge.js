/*
    Create function with parameter that return array of prime number
    For how much number depends on the input

    For example, input 11
    Expected result [2, 3, 5, 7, 11]
*/

const result = (a) => {
    
    let arr = []

    for (let i = 2; i <= a; i++) {
        // console.log("\nfirst loop, i-", i);
        let b

        for (let j = 2; j < i; j++) {
            // console.log(`i/j => [${i}]/[${j}]-> ${i%j}`);
            if (i % j == 0) {
                b = "not prima"
            }
        }
        
        if (b != "not prima") {
            arr.push(i)
        }
    }
    
    return arr
}

console.log(result(11))