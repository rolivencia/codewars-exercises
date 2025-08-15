// Solution for the 57a55c8b72292d057b000594 problem at CodeWars: Reversing Words in a String (8 kyu)

function reverse(str){
    const result = []
    str.split(' ').forEach(word => result.unshift(word))
    return result.join(' ')
}
