// Solution for the 53d32bea2f2a21f666000256 problem at CodeWars: Largest Elements (7 kyu)

function largest(n, array) {

    if(n === 0){
        return []
    }

    // Find the n highest elements in a list
    return array.sort((a,b) => a-b).slice((-1) * n);
}