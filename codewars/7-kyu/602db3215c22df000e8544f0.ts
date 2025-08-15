// Solution for the 602db3215c22df000e8544f0 problem in CodeWars: Two numbers are positive (7 kyu)

export function twoArePositive(a: number, b: number, c: number): boolean {
    // your code here
    return [a,b,c].filter(n => n > 0).length === 2;
}
