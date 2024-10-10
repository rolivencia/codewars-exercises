// Solution for the 54557d61126a00423b000a45 problem in CodeWars: shorter concat [reverse longer] (7 kyu)

export function shorterReverseLonger(a: string, b: string): string {

    const shorter = a.length < b.length ? a : b
    const longer = a.length >= b.length ? a : b

    return shorter + longer.split('').reverse().join('') + shorter
}
