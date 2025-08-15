// Solution for the 580a4734d6df748060000045 problem at CodeWars: Sorted? yes? no? how? (7 kyu)

export function isSortedAndHow(array:number[]): string {
  const [first, second, third, ...others] = array
  
  // Special cases
  if(array.length === 2){
    if(first <= second)
      return 'yes, ascending'
    if(first >= second)
      return 'yes, descending'
  }
  else {
    if(first <= second && second <= third)
      return 'yes, ascending'
  
    if(first >= second && second >= third)
      return 'yes, descending'
  }
  
  return 'no';
}
