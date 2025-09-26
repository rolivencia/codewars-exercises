// Solution for the 558f9f51e85b46e9fa000025 problem at CodeWars: Difference of Squares (7 kyu)

function differenceOfSquares(n) {
    const squareOfSums = gaussFormula(n) ** 2
    const sumOfSquares = faulhaberFormula(n)
    return squareOfSums - sumOfSquares
}

function gaussFormula(n) {
    return (n * (n + 1)) / 2
}

function faulhaberFormula(n) {
    return (n * (n + 1) * (2 * n + 1)) / 6
}