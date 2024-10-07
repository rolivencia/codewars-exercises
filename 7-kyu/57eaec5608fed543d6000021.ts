// Solution for the 57eaec5608fed543d6000021 problem in CodeWars: Divide and Conquer (7 kyu)

export function divCon(x: (string | number)[]): number {
  const add: number = (x.filter(n => typeof n === 'number') as number[]).reduce((accum,value) => accum + value, 0)
  const subtract: number = (x.filter(n => typeof n === 'string') as string[]).map(n => parseInt(n)).reduce((accum,value) => accum - value, 0)
  return add + subtract
}
