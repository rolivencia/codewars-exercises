// Solution for the 5663f5305102699bad000056 problem in CodeWars: Maximum Length Difference (7 kyu)

function mxdiflg(a1, a2) {
    let candidate = -1

    if(a1.length === 0|| a2.length === 0){
        return candidate
    }

    const a1L = a1.map(e => e.length)
    const a2L = a2.map(e => e.length)

    const largestA1 = a1L.reduce((accum, value) => value > accum ? value : accum, a1L[0])
    const largestA2 = a2L.reduce((accum, value) => value > accum ? value : accum, a2L[0])

    const smallestA1 = a1L.reduce((accum, value) => value < accum ? value : accum, a1L[0])
    const smallestA2 = a2L.reduce((accum, value) => value < accum ? value : accum, a2L[0])

    return Math.max(...[Math.abs(largestA1-smallestA2), Math.abs(largestA2-smallestA1)])
}
