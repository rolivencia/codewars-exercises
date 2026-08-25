// Solution for the 554ca54ffa7d91b236000023 problem at CodeWars: Delete occurrences of an element if it occurs more than n times (6 kyu)

function deleteNth(arr, n) {
  const result = []
  const obj = arr.reduce((accum, value) => {
    if(!accum[value]){
      accum[value] = 1
    } else{
      accum[value] += 1
    }
    
    if(accum[value] <= n){
      result.push(value)
    }
    
    return accum
  }, {})
  
  return result
}