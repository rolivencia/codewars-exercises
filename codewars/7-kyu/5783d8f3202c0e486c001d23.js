// Solution for the 5783d8f3202c0e486c001d23 problem at CodeWars: Convert an array of strings to array of numbers (7 Kyu)

function toNumberArray(stringarray){
    return stringarray.map(item => parseFloat(item))
}
