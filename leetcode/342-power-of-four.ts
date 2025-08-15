// Solution for the 342. Power of Four problem at LeetCode

function isPowerOfFour(n: number): boolean {
    // If n is equal or lower than 0 it cannot be the result of an Exp operation
    if(n <= 0){
        return false
    }

    // The zeroth power of 4
    if(n === 1) {
        return true
    }

    // General case - We check if the log in base 4 of the input is an integer
    return Number.isInteger(Math.log(n) / Math.log(4))
};