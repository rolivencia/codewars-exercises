// Solution for the 57ab3c09bb994429df000a4a problem at CodeWars: Return Two Highest Values in List (8 kyu)

function twoHighest(arr) {
    if(arr.length === 0){
        return arr
    }

    const uniques = Array.from(new Set(arr)).sort((a,b) => b-a)

    if(uniques.length === 1){
        return uniques
    }

    return [uniques[0], uniques[1]]
}