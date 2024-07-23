// Solution for the 5a7778790136a132a00000c1 problem in CodeWars: Single digit (7 kyu)

export function singleDigit(n: number): number {

    if(n<10){
        return n
    }

    const asBinary = (n >>> 0).toString(2)

    const result = asBinary
        .split('')
        .map(x => parseInt(x))
        .reduce((accum, value) => accum+value, 0)

    return result < 10 ? result : singleDigit(result)
}
