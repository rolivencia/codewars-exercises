// Solution for the 59706036f6e5d1e22d000016 problem at CodeWars: Love vs friendship (7 kyu)

function wordsToMarks(str){
    return str.split('').reduce((accum, value) => accum + getCharValue(value), 0)
}

function getCharValue(char) {
    return char.charCodeAt(0) - 96
}