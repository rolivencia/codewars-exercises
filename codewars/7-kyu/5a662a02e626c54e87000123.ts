// Solution for the 5a662a02e626c54e87000123 problem at CodeWars: Training on Extra Perfect Numbers (Special Numbers Series #7) (7 kyu)

export function extraPerfect(n: number) {
  
  const result: number[] = []
  
  for(let i = 1; i<=n; i+=2){
    result.push(i)
  }
  
  return result;
}
