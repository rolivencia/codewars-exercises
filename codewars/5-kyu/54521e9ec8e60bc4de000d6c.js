// Solution for the 54521e9ec8e60bc4de000d6c problem at CodeWars: Maximum subarray sum (5 kyu)

// O(n^2) complexity
var maxSequence = function(arr){
    let headIndex = 0
    let tailIndex = arr.length - 1
    let result = 0

    while(headIndex < arr.length){
        while(tailIndex >= headIndex){
            const sumCandidate = sum(arr, headIndex, tailIndex)
            if(sumCandidate >= result){
                result = sumCandidate
            }
            tailIndex--
        }
        tailIndex = arr.length - 1
        headIndex++
    }
    return result
}

function sum(arr, headIndex, tailIndex) {
    return arr.slice(headIndex, tailIndex + 1).reduce((accum, value) => accum + value, 0)
}

// O(n) complexity, using Kadane's algorithm
var maxSequence = function(arr){
    let result = 0
    let candidate = 0

    for(let i = 0; i < arr.length; i++) {
        candidate = Math.max(arr[i], candidate + arr[i])
        result = Math.max(result, candidate)
    }

    return result

}
