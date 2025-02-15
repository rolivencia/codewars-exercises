// Solution for the 562926c855ca9fdc4800005b problem at CodeWars: Power (8 kyu)

function numberToPower(number, power){
    if(number === 0){
        return 0
    }
    return Array(power).fill(number).reduce((accum, value) => accum * value, 1)
}
