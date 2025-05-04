// Solution for the 5413759479ba273f8100003d problem at CodeWars: esreveR (7 kyu)

reverse = function(array) {
    const result = []
    for(let i = array.length - 1; i >= 0; i--) {
        result.push(array[i])
    }
    return result
}