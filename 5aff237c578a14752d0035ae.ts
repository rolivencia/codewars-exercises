// Solution for the 5aff237c578a14752d0035ae problem in CodeWars: 'Predict your age!' (7 kyu)

export function predictAge(...ages: number[]): number {
  return Math.floor(Math.sqrt(ages.map(age => age*age).reduce((x,y) => x+y, 0))/2);
};
