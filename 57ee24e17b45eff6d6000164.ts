// Solution for the 57ee24e17b45eff6d6000164 problem in CodeWars: Cat and Mouse - Easy Version (7 kyu)

export function catMouse(x: string): string {
    const value = x.split('').filter(c => c === '.').length
    return value > 3 ? 'Escaped!' : 'Caught!';
}
