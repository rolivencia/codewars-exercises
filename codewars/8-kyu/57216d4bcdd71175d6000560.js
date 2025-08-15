// Solution for the 57216d4bcdd71175d6000560 problem at CodeWars: Training JS #9: loop statement --while and do..while (8 kyu)

function padIt(str,n){
    let result = str
    let i = 0
    
    while(i < n){
      
      if(i % 2 !== 0){
        result = result.concat('*')
      } else {
        result = '*'.concat(result)
      }
      
      i++
    }
    
    return result
  }