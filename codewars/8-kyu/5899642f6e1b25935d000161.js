// Solution for the 5899642f6e1b25935d000161 problem at CodeWars: Merge two sorted arrays into one (8 kyu)

function mergeArrays(arr1, arr2) {
    if(arr1.length === 0 && arr2.length === 0){
        return []
    }

    const withoutDuplicates = Array.from(new Set(arr1.concat(arr2)))
    return withoutDuplicates.sort((a,b) => a-b)
}