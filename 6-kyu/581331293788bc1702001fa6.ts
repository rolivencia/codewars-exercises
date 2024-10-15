// Solution for the 581331293788bc1702001fa6 problem in CodeWars: 'Framed Reflection' (6 kyu)

export function mirror(text:string):string{
    const largestWordLength = text.split(' ').sort((a,b) => b.length - a.length)[0].length

    const reversedWords = text.split(' ').map(word => {
        const reverseWord = word.split('').reverse().join('')
        const spaces = [].constructor(largestWordLength - reverseWord.length).fill(' ').join('')
        return reverseWord + spaces
    }).join(' *\n* ')

    const withBorders = `\n* ${reversedWords} *\n`
    const horizontalBorder = [].constructor(largestWordLength + 4).fill('*').join('')

    return `${horizontalBorder}${withBorders}${horizontalBorder}`
}
