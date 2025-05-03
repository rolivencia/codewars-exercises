// Solution for the 57fae964d80daa229d000126 problem at CodeWars: Exclamation marks series #1: Exclamation marks series #1: Remove an exclamation mark from the end of string (8 kyu)

export function remove(s: string): string {
    return s[s.length-1]==='!' ? s.slice(0,s.length-1) : s;
}
