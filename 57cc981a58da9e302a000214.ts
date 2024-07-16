// Solution for the 57cc981a58da9e302a000214 problem in CodeWars: Small enough? - Beginner (7 kyu)

export function smallEnough(a: number[], limit: number): boolean{
  return a.filter(n => n <= limit).length === a.length
}
