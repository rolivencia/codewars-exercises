// Solution for the 58b8c94b7df3f116eb00005b problem at CodeWars: Simple Fun #176: Reverse Letter (7 kyu)

function reverseLetter(str) {
    return str.split('').reverse().join('').replace(/[^a-zA-z]/g, '')
}
