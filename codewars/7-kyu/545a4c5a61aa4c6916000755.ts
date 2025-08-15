// Solution for the 545a4c5a61aa4c6916000755 problem at CodeWars: Find the middle element (7 kyu)

function gimme (triplet) {
    return triplet
        .map((n, index) => ({ index: index, number: n }))
        .sort((a,b) => a.number-b.number)[1].index
}
