// Solution for the 57a386117cb1f31890000039 problem in CodeWars: 'Parse float' (8 kyu)

export function parseF(s:string): number|null {

    const result = parseFloat(s)

    return !isNaN(result) ? result : null;
}
