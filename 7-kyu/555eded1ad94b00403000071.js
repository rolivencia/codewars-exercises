// Solution for the 555eded1ad94b00403000071 problem at CodeWars: Sum of the first nth term of Series

function SeriesSum(n) {
    const denominators = Array.from({ length: n }, (_, i) => (3*i) + 1)
    return denominators.reduce((accum, value) => accum + 1/value, 0).toFixed(2)
}
