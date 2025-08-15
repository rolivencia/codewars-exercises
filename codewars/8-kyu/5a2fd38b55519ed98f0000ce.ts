// Solution for the 5a2fd38b55519ed98f0000ce problem at CodeWars: Multiplication table for number (8 kyu)

export function multiTable(n:number):string {

  let result = ''

  for(let i = 0; i<10; i++){
    result = result.concat(`${i+1} * ${n} = ${(i+1) * n}${i === 9 ? '' : '\n'}`)
  }

  return result
}
