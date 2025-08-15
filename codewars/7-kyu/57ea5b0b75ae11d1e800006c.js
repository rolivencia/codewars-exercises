// Solution for the 57ea5b0b75ae11d1e800006c problem at CodeWars: Sort array by string length (7 kyu)

function sortByLength (array) {
    // Return an array containing the same strings,
    // ordered from shortest to longest
    return array.sort((a,b) => a.length - b.length);
}
