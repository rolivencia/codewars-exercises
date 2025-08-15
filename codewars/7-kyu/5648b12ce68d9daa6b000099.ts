// Solution for the 5648b12ce68d9daa6b000099 problem at CodeWars: Number of People in the Bus (7 kyu)

export function number(busStops:number[][]):number {
  return busStops.reduce((rem, [on, off]) => rem+(on-off), 0);
}
