// Solution for the 593c9175933500f33400003e problem at CodeWars: Return the First M Multiples of N (7 kyu)

function multiples(m, n){
    return new Array(m).fill(n).map((value, index) => value * (index + 1))
}