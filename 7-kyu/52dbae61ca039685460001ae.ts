// Solution for the 52dbae61ca039685460001ae problem at CodeWars: Search for letters (7 kyu)

export function change(string: string): string {
    const codes = string
        .split('')
        .map(char => char.toLowerCase())
        .filter(char => /[a-z]/.test(char))
        .map(char => char.charCodeAt(0) - 97)

    return new Array(26).map((_, index) => codes.includes(index) ? '1' : '0').join('')
}
