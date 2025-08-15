// Solution for the 577b9960df78c19bca00007e problem at CodeWars: Find the nth Digit of a Number

function findDigit(num, nth) {
    if (nth <= 0) {
        return -1
    }

    const arr = Math.abs(num).toString().split('').reverse()
    console.log(arr, nth)

    if(nth > arr.length){
        return 0
    }

    return parseInt(arr[nth-1]);
}