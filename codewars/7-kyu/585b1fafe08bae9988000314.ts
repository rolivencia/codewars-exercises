// Solution for the 585b1fafe08bae9988000314 problem at CodeWars: Digits explosion (7 kyu)

export function explode(s: string): string {
    return s.split('')
        .map(char => Array.from({length: parseInt(char)}, () => char))
        .reduce((x,y) => x.concat(y), [])
        .join('');
}
