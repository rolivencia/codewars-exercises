// Solution for the 5966eeb31b229e44eb00007a problem at CodeWars: VAPORCODE (7 kyu)

export function vaporcode(str: string ): string {
    return str.toUpperCase().split('').filter(letter => letter !== ' ').join('  ');
}
