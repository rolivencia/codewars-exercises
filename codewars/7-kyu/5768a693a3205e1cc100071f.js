// Solution for the 5768a693a3205e1cc100071f problem at CodeWars: Initialize my name (7 kyu)

function initializeNames(name){
  const names = name.split(' ')
  if(names.length <= 2){
    return name
  }
  
  return names.map((value, index) => {
    if(index === 0 || index === names.length -1){
      return value
    }
    
    return `${value[0].toUpperCase()}.`
  }).join(' ')
}