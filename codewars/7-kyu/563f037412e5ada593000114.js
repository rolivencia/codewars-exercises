// Solution for the 563f037412e5ada593000114 problem at CodeWars: Money, Money, Money (7 kyu)

// The solution works out the formula for compounded interest, avoiding the use of a loop
function calculateYears(principal, interest, tax, desired) {
    return Math.ceil(Math.log(desired / principal) / Math.log(1 + interest * (1 - tax)))
}