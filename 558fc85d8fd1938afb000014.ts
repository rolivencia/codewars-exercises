// Solution for the 558fc85d8fd1938afb000014 problem in CodeWars: Sum of two lowest positive integers (7 kyu)

function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a,b) => a-b).slice(0,2).reduce((accum, n) => accum + n, 0)
}
