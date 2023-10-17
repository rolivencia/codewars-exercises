export function findEvenIndex(arr: number[]): number
{
  let index = 0
  let found = false
  
  while(index !== arr.length && !found){
    const left = arr.slice(0, index).reduce((x,y) => x+y, 0)
    const right = arr.slice(index+1).reduce((x,y) => x+y, 0)
    
    if(left === right){
      found = true
      return index
    }
    
    index ++

  }
  
  return -1
}
