// Solution for the 59cfc000aeb2844d16000075 problem in CodeWars: Alternate capitalization (7 kyu)

export function capitalize(s: string) {
    const splitted = s.split('')
    const first = splitted.map((letter, index) => index % 2 !== 0 ? letter.toLowerCase() : letter.toUpperCase()).join('')
    const second = splitted.map((letter, index) => index % 2 === 0 ? letter.toLowerCase() : letter.toUpperCase()).join('')
    return [first, second]
}
