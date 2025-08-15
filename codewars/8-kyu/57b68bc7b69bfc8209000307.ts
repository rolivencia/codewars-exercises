// Solution for the 57b68bc7b69bfc8209000307 problem in CodeWars: 'Get the mean of an array' (8 kyu)

export function average(scores:number[]):number {
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}
