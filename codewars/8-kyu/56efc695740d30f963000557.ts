// Solution for the 56efc695740d30f963000557 problem in CodeWars: altERnaTIng cAsE <=> ALTerNAtiNG CaSe (8 kyu)

export function toAlternatingCase(s: string): string {
    return s
        .split('')
        .map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase())
        .join('')
}
