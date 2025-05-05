// Solution for the 5ba38ba180824a86850000f7 problem at CodeWars: Simple remove duplicates (7 kyu)

function solve(arr) {
    const result = []
    for(let element of arr.reverse()){
        if(result.find((e) => element === e) !== undefined){
            continue
        }
        result.push(element)
    }
    return result.reverse()
}