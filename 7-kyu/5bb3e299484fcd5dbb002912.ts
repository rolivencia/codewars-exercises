// Solution for the 5bb3e299484fcd5dbb002912 problem at CodeWars: Billiards triangle (7 kyu)

export function pyramid(balls: number): number {
 let levels = 0
 while(balls > levels){
  levels++
  balls = balls-levels
 }
 return levels
}