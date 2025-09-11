// Solution for the 5264d2b162488dc400000001 problem at CodeWars: Stop gninnipS My sdroW!

export function spinWords(words: string): string {
    return words
        .split(' ')
        .map(word => word.length < 5 ?
            word :
            word
                .split('')
                .reverse()
                .join('')
        )
        .join(' ')
}