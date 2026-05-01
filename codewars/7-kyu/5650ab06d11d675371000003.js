// Solution for the 5650ab06d11d675371000003 problem at CodeWars: Split In Parts (7 kyu)

var splitInParts = function(s, partLength){
    if(partLength >= s.length){
        return s
    }

    const result = []

    for(let i = 0; i < s.length; i += partLength){
        result.push(s.slice(i, i+partLength))
    }

    return result.join(' ')
}