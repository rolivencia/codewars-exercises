// Solution for the 5761a717780f8950ce001473 problem at CodeWars: How old will I be in 2099? (8 kyu)

function  calculateAge(bornYear, testYear) {
    if(bornYear === testYear) {
        return `You were born this very year!`
    }
    else if(bornYear > testYear){
        return `You will be born in ${bornYear - testYear} year${ bornYear - testYear > 1 ? 's' : ''}.`
    }
    else {
        return `You are ${testYear - bornYear} year${ testYear - bornYear > 1 ? 's' : ''} old.`
    }
}
