// Solution for the 5513795bd3fafb56c200049e problem at Codewars: Count by X (7 kyu)

export function countBy(x: number, n: number): number[] {
    return Array.from({ length: n }, (_, index) => (index + 1) * x)
}