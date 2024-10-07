// Solution for the 5c5086287bc6600001c7589a problem in CodeWars: Is It Negative Zero (-0)? (7 kyu)

export function isNegativeZero(n:number):boolean {
    const isZero = n === 0;
    const hasNegativeLimit = 1 / n === -Infinity;
    return hasNegativeLimit && isZero;
}
