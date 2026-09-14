// Solution for the 58f5c63f1e26ecda7e000029 problem at CodeWars: Mexican Wave(6 kyu)

function wave(str){
  const raw = str.split('')
  const result = []
  
  for(let i=0; i < raw.length; i++){
    if(raw[i] === ' '){
      continue
    }
    
    const dup = [...raw]
    dup[i] = raw[i].toUpperCase()  
    result.push(dup)
  }
  
  return result.map(dup => dup.join(''))
}