// Solution for the 59c5f4e9d751df43cf000035 problem in CodeWars: 'Longest vowel chain' (7 kyu)

export function solve(s: string) {
    const regex = /[^aeiou]/gi // Not vowels (i.e. consonants and other chars)
    const vowelChainLengths = s.split(regex).filter(s => !!s).map(s => s.length);
    return Math.max(...vowelChainLengths)
}
