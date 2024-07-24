// Solution for the 59e9f404fc3c49ab24000112 problem in CodeWars: Ch411eng3 (7 kyu)

export function nerdify(txt: string): string {
    return txt
        .split('')
        .map(letter => ['a', 'A'].includes(letter) ? '4' : letter)
        .map(letter => ['e', 'E'].includes(letter) ? '3' : letter)
        .map(letter => letter === 'l' ? '1' : letter)
        .join('')
}
