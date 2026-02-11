// Solution for the 5262119038c0985a5b00029f problem at CodeWars: Is a number prime? (6 kyu)

function isPrime(num) {

    // Edge cases
    if(num < 1){
        return false
    }

    if(num === 2){
        return true
    }

    const root = Math.ceil(Math.sqrt(num))
    for(let i = 2; i <= root; i++){
        if(num % i === 0){
            return false
        }
    }

    return true
}
