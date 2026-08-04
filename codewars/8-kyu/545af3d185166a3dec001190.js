// Solution for the 545af3d185166a3dec001190 problem at CodeWars: Enumerable Magic #20 - Cascading Subsets (8 kyu)

function eachCons(array, n) {
    const result = []

    for(let i = n; i <= array.length; i++){
        result.push(array.slice(i-n, i))
    }

    return result;
}