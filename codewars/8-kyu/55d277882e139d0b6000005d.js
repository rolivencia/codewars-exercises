// Solution for the 55d277882e139d0b6000005d problem at CodeWars: Grasshopper - Array Mean (8kyu)

function findAverage(nums) {
    return nums.reduce((accum, value) => accum + value, 0) / nums.length
}
