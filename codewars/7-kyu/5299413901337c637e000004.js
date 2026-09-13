// Solution for the 5299413901337c637e000004 problem at CodeWars: Return the missing element (7 kyu)

function getMissingElement(superImportantArray){
  const sumTotal = (9 * 10) / 2
  const sumArray = superImportantArray.reduce((accum, value) => accum + value, 0)
  
  if(sumTotal === sumArray){
    return 0
  }
  
  return sumTotal - sumArray
}