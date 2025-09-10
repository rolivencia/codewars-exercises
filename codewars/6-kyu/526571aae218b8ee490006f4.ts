// Solution for the 526571aae218b8ee490006f4 problem at CodeWars: Bit Counting (6 kyu)

export function countBits(n: number): number {
    return n.toString(2).split('').reduce((accum, value) => accum + parseInt(value), 0)
}