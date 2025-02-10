// Solution for the 524f5125ad9c12894e00003f problem at CodeWars: Find the Remainder (8 kyu)

function remainder(n, m){
    const [divider, divisor] = [n, m].sort((a,b) => b-a)

    if(divisor === 0){
        return NaN
    }

    return divider % divisor
}
