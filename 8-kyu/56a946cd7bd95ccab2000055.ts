// Solution for the 56a946cd7bd95ccab2000055 problem at CodeWars: Regex count lowercase letters (8 kyu)

function lowercaseCount(str){
    const regex = new RegExp("[a-z]", 'g' )
    return str.match(regex)?.length ?? 0
}
