// Solution for the 525d50d2037b7acd6e000534 problem at CodeWars: Array Helpers (6 kyu)

Array.prototype.square = function() {
    return this.map(n => n*n)
}

Array.prototype.cube = function() {
    return this.map(n => n*n*n)
}

Array.prototype.sum = function() {
    return this.reduce((accum, value) => accum + value, 0)
}

Array.prototype.average = function() {
    return this.sum() / this.length
}

Array.prototype.even = function() {
    return this.filter(n => n % 2 === 0)
}

Array.prototype.odd = function() {
    return this.filter(n => n % 2 !== 0)
}