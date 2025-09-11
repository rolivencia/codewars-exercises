// Solution for the 541c8630095125aba6000c00 problem at CodeWars: Sum of Digits / Digital Root (6 kyu)

export const digitalRoot = (n:number):number => {
    while(n > 9){
        n = n
            .toString()
            .split('')
            .map(s => parseInt(s))
            .reduce((accum, value) => accum + value, 0)
    }

    return n
};