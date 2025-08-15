// Solution for the 5738f5ea9545204cec000155 problem in CodeWars: 'Help Bob count letters and digits' (7 kyu)

export function countLettersAndDigits(input: string): number {
  const regex = /\d*[a-z]*[A-Z]*/g
  return Array
    .from(input.matchAll(regex))
    .filter(s => !!s[0])
    .map(s => s[0])
    .join('')
    .length;
}
