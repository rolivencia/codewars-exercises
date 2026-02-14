
function isPrime(num) {

    // Edge cases
    if(num <= 1){
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
