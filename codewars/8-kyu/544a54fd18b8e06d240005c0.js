// Solution for the 544a54fd18b8e06d240005c0 at CodeWars: Smallest value of an array (8 kyu)

function min(arr, toReturn) {
    return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
}