// Solution for the 5546180ca783b6d2d5000062 problem at CodeWars: Squares sequence (7 kyu)

function squares(x, n) {
  if(n <= 0){
    return []
  }
  
  return Array(n).fill().map((_, i) => x ** (2 ** i))
}
