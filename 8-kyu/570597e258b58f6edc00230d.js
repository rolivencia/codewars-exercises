// Solution for the 570597e258b58f6edc00230d problem at CodeWars: Remove First and Last Character Part Two (8 kyu)

function array(string) {
    const arr = string.split(',')
    if(arr.length <= 2){
      return null
    }
    
    return arr.slice(1).slice(0,-1).join(' ')
  }