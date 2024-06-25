// Solution for 5a63948acadebff56f000018 problem in CodeWars: Product Of Maximums Of Array (Array Series #2) (7 kyu)

export function maxProduct(numbers: number[], size: number): number {
    return numbers.sort((a,b) => b-a).slice(0, size).reduce((a,b) => a * b, 1);
}
