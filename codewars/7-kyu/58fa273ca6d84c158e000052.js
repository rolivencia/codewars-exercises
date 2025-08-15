// Solution for the 58fa273ca6d84c158e000052 problem at CodeWars: Number of Decimal Digits

function digits(n) {
    return n.toString().split('').reduce((accum, value) => accum + 1, 0)
}