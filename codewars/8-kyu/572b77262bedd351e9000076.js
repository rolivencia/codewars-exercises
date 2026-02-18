// Solution for the 572b77262bedd351e9000076 problem at CodeWars: Pick a set of first elements (8 kyu)

function first(arr, n) {
    if(n === undefined) {
        return arr.slice(0,1)
    }


    return arr.slice(0,n)
}