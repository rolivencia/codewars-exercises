// Solution for the 56541980fa08ab47a0000040 problem at CodeWars: Printer Errors (7 kyu)

export function printerError(s: string): string {
  // your code
  return `${s.split('').filter(letter => letter.toLowerCase().charCodeAt(0) > 109).length}/${s.length}`
}
