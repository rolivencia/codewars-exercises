// Solution for the 5a523566b3bfa84c2e00010b problem at CodeWars: Minimize Sum Of Array (Array Series #1) (7 kyu)
export function minSum(arr: number[]): number {
    return arr
        .sort((a, b) => a - b)
        .reduce((accum, current, index) => accum + current * arr[arr.length - 1 - index], 0) / 2
}
 
