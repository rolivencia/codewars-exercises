// Solution for the 56b29582461215098d00000f problem in CodeWars: 'Lario and Muigi Pipe Problem' (8 kyu)

export function pipeFix(numbers: number[]): number[]{
    const first = numbers[0];
    const last = numbers[numbers.length - 1]
    return Array.from(Array(last-first+1).keys()).map(n => n+first)
}
