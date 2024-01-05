export function average(scores:number[]):number {
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}
