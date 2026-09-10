// Solution for the 5842df8ccbd22792a4000245 problem at CodeWars: Write Number in Expanded Form (6 kyu)
 
function expandedForm(num) {
  const expansions = [];
  
  while(num !== 0){
    const length = Math.floor(Math.log10(Math.abs(num))) + 1;
    const power = 10 ** (length-1)
    const expanded = Math.floor(num / power) * (power)
    expansions.push(expanded.toString())
    
    num = num - expanded
  }
  
  return expansions.join(' + ') 
}