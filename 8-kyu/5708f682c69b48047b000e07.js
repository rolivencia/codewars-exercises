// Solution for the 5708f682c69b48047b000e07 problem at CodeWars: Multiply the number (8 kyu)

function multiply(number){
    const exponent = parseInt(Math.abs(number).toString().length)
    return number * (5 ** exponent)
}
