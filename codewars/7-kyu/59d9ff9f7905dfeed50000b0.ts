// Solution for the 59d9ff9f7905dfeed50000b0 problem at CodeWars: Alphabet symmetry (7 kyu)

export function letterOrder(word: string, index: number){
    return (word.charCodeAt(index) - 96)
}

export function processWord(word: string): number {
    const wordInLowerCase = word.toLowerCase()
    const indexes = []
    for(let index = 0; index < word.length; index++){
        if(letterOrder(wordInLowerCase, index) === index + 1){
            indexes.push(letterOrder(wordInLowerCase, index))
        }
    }
    return indexes.map(x => 1).reduce((x,y) => x+y, 0)
}

export function solve(words: string[]): number[] {
    return words.map(word => processWord(word))
}
