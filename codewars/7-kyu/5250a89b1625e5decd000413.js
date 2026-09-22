// Solution for the 5250a89b1625e5decd000413 problem at CodeWars: Training on flatten (7 kyu)

function flatten(array) {
    return array.reduce((accum, value) => accum.concat(value), []);
}