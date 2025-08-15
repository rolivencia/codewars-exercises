// Solution for the 562926c855ca9fdc4800005b problem at CodeWars: Power (8 kyu)

function numberToPower(number, power){
    if(power === 0){
        return 1
    }
    if(number === 0){
        return 0
    }
    return Array(power).fill(number).reduce((accum, value) => accum * value, 1)
}
