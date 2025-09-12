// Solution for the 55b1fd84a24ad00b32000075 problem at CodeWars: Selective fear of numbers (7 kyu)

interface AfraidPerDay {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
  fn(n: number): boolean
}

export function amIAfraid(day: string, num: number): boolean {
  
  const conditions: AfraidPerDay[] = [
    {
      day: 'Monday',
      fn: (n: number) => n === 12
    },
    {
      day: 'Tuesday',
      fn: (n: number) => n > 95
    },
    {
      day: 'Wednesday',
      fn: (n: number) => n === 34
    },
    {
      day: 'Thursday',
      fn: (n: number) => n === 0
    },
    {
      day: 'Friday',
      fn: (n: number) => n % 2 === 0
    },
    {
      day: 'Saturday',
      fn: (n: number) => n === 56
    },
    {
      day: 'Sunday',
      fn: (n: number) => n === -666 || n === 666
    }
  ]
  
  return conditions.find(c => c.day === day)?.fn(num) ?? false
}
