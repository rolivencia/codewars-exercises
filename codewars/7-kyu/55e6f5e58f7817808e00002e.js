// Solution for the 55e6f5e58f7817808e00002e problem at CodeWars: A Rule of Divisibility by 7

function seven(m) {
  let steps = 0
  while(m >= 100){
    steps++
    m = Math.floor(m / 10) - 2*(m % 10)
  }
  return [m, steps]
}