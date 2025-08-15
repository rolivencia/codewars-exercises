// Solution for the 57fd696e26b06857eb0011e7 problem at CodeWars: Hungarian Vowel Harmony (7 kyu)

export function dative (word: string): string | undefined {
    const frontVowels = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű']
    const backVowels = ['a', 'á', 'o', 'ó', 'u', 'ú']
    const vowels = word.split('').filter(letter => [...frontVowels, ...backVowels].includes(letter))
    return frontVowels.includes(vowels[vowels.length - 1]) ? `${word}nek` : `${word}nak`
}
