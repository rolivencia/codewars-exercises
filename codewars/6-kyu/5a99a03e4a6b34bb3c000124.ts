// Solution for the 5a99a03e4a6b34bb3c000124 problem at CodeWars: Primorial Of a Number (6 kyu)

export function numPrimorial(n: number) {
    return getPrimes(n).reduce((accum, value) => accum * value, 1)
}

function isPrime(n: number) {
    if (n === 1) {
        return false
    }

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}

function getPrimes(amount: number): number[] {
    const primes: number[] = []
    let value = 2
    while(primes.length < amount){
        if(isPrime(value)){
            primes.push(value)
        }
        value += 1
    }
    return primes;
}
