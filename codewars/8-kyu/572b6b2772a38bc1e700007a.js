// Solution for the 572b6b2772a38bc1e700007a problem at CodeWars: ASCII Total (8 kyu)

function uniTotal (string) {
    if(string.length === 0){
        return 0
    }

    return string
        .split('')
        .map(letter => letter.charCodeAt(0))
        .reduce((accum, value) => accum + value, 0)
}
