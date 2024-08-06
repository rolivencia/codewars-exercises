// Solution for the 57642a90dee2da8dd3000161 problem in CodeWars: Arguments to Binary addition (8 kyu)

export function arr2bin(arr: any[]): string {
    return arr
        .filter(x => typeof x === 'number')
        .reduce((accum, value) => accum + value, 0)
        .toString(2)
}
