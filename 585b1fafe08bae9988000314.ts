export function explode(s: string): string {
    return s.split('')
        .map(char => Array.from({length: parseInt(char)}, () => char))
        .reduce((x,y) => x.concat(y), [])
        .join('');
}
