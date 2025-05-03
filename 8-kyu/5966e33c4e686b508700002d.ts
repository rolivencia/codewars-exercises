// Solution for the 5966e33c4e686b508700002d problem at CodeWars (8 kyu)

export function sumStr(a: string, b: string): string {
    return (parseInt(a === "" ? '0' : a) + parseInt(b === "" ? '0' : b)).toString();
}
