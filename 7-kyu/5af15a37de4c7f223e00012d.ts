// Solution for the 5af15a37de4c7f223e00012d problem at CodeWars: Sort Out The Men From Boys (7 kyu)

export function menFromBoys(arr: number[]): number[] {
    const men = arr.filter(x => x % 2 === 0).sort((a,b) => a-b)
    const boys = arr.filter(x => x % 2 !== 0).sort((a,b) => b-a)
    return [...(new Set(men.concat(boys)))]
}
