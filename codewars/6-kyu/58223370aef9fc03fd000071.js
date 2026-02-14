// Solution for the 58223370aef9fc03fd000071 problem at CodeWars: Dashatize (6 kyu)

function dashatize(num) {
  return num
    .toString()
    .split('')
    .reduce((accum, intAsChar) => {
    
      const asNumber = parseInt(intAsChar)
      
      // First element always gets added to the accumulator
      if(accum.length === 0){
        accum.push(intAsChar)
        
        if(asNumber % 2 !== 0){
          accum.push('')
        }
        
        return accum
      }
      
      // If number is even, we concat it to the latest substring in the accumulator
      if(asNumber % 2 === 0){
        accum[accum.length-1] = accum[accum.length-1].concat(intAsChar)
        return accum
      }
    
      // Default case, an odd number, gets added as a new string in the accum array
      // with a subsequent empty string being added, which will host the next even
      accum.push(intAsChar)
      accum.push('')
      return accum
    
    }, [])
    .filter(str => str !== '')
    .join('-')
    .replace(/^-+/, "") // Replace all occurrences of '-' at the start of the string
}
