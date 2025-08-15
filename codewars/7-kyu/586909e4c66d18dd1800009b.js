// Solution for the 586909e4c66d18dd1800009b problem at CodeWars: Currying functions: multiply all elements in an array (7 kyu)

function multiplyAll(array) {
    return function(multiplier) {
        return array.map(value => value * multiplier)
    }
}