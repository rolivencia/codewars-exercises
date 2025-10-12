// Solution for the 59811fd8a070625d4c000013 problem at CodeWars: Find the Integral (8 kyu)

function integrate(coefficient, exponent) {
    return `${coefficient / (exponent+1)}x^${exponent+1}`
}