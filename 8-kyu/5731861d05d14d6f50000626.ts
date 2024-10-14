// Solution for the 5731861d05d14d6f50000626 problem at CodeWars: Training JS #29: methods of arrayObject---concat() and join() (8 kyu)

export function bigToSmall(arr: number[][]): string {
    return arr.flat().sort((a,b) => b-a).join('>')
}
