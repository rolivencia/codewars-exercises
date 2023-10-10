export function printerError(s: string): string {
  // your code
  return `${s.split('').filter(letter => letter.toLowerCase().charCodeAt(0) > 109).length}/${s.length}`
}
