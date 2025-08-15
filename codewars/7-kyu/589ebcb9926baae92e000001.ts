// Solution for the 589ebcb9926baae92e000001 problem at CodeWars: ASCII letters from Number (7 kyu)

export function convert(n: string): string {
    // ...Convert integers given as string into ASCII uppercase letters...
    return n
        .split('')
        .map((char, index) => (index % 2 !== 0 && index !== n.length-1) ? `${char},` : char)
        .join('')
        .split(',')
        .map(code => String.fromCharCode(parseInt(code)))
        .join('')
}
