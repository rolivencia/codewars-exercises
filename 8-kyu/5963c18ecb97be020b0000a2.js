// Solution for the 5963c18ecb97be020b0000a2 problem at CodeWars: Take the Derivative (8 kyu)

function derive(coefficient,exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`
}