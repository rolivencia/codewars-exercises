// Solution for the 53697be005f803751e0015aa problem in CodeWars: 'The Vowel Code' (6 kyu)

export function encode(s: string): string {
    return s
        .replaceAll('a', '1')
        .replaceAll('e', '2')
        .replaceAll('i', '3')
        .replaceAll('o', '4')
        .replaceAll('u', '5')
}

// turn numbers back into vowels
export function decode(s: string): string {
    return s
        .replaceAll('1', 'a')
        .replaceAll('2', 'e')
        .replaceAll('3', 'i')
        .replaceAll('4', 'o')
        .replaceAll('5', 'u')
}
