// Solution for the 59a96d71dbe3b06c0200009c problem in CodeWars: 'Build a square' (7 kyu)

export function generateShape(int: number): string {
    return Array(int).fill(Array(int).fill('+').join('')).join('\n')
}
