// Solution for the 5a512f6a80eba857280000fc problem in CodeWars: 'Nth Smallest Element (Array Series #4)' (7 kyu)

export function nthSmallest(arr: number[], pos: number) {
    return arr.sort((a,b) => a-b)[pos-1]
}
