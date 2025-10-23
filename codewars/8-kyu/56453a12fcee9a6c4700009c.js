// Solution for the 56453a12fcee9a6c4700009c problem at Codewars: Compare within margin (8 kyu)

function closeCompare(a, b, margin = 0){

    if(a-b === 0){
        return 0
    }

    if(Math.abs(a-b) <= margin){
        return 0
    }

    return Math.ceil((a-b) / Math.abs(a-b))
}
