// Solution for the 56f7493f5d7c12d1690000b6 problem in CodeWars: Calculate mean and concatenate string (7 kyu)

export function mean(lst: string[]): [number, string] {
    const letters: string[] = lst.filter(x => isNaN(parseInt(x)))
    const numbers: number[] = lst.filter(x => !isNaN(parseInt(x))).map(x => parseInt(x))

    return [
        numbers.reduce((accum, value) => accum + value, 0) / numbers.length,
        letters.reduce((accum, value) => accum + value, '')
    ]
}
