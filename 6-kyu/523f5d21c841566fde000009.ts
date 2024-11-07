// Solution for the 523f5d21c841566fde000009 problem at CodeWars: Training on Array.diff (6 kyu)

export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter(item => !b.includes(item));
}
