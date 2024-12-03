import fs from 'fs'

const input = fs.readFileSync('./day-1.input.txt', 'utf-8')
const lines = input.split('\r\n')

let leftLine: number[] = []
let rightLine: number[] = []

for(let tuple of lines){
    const [left, right] = tuple.split(', ')

    leftLine.push(parseInt(left))
    rightLine.push(parseInt(right))
}

leftLine = leftLine.sort((a, b) => a - b)
rightLine = rightLine.sort((a, b) => a - b)

let distances: number[] = []

for(let i = 0; i < leftLine.length; i++){
    distances.push(Math.abs(rightLine[i] - leftLine[i]))
}

// I apply a filter to remove NaN values that may appear in the array
// after parsing the input
const resultPartOne = distances
    .filter(value => !isNaN(value))
    .reduce((sum, value) => sum + value, 0)

console.log(resultPartOne)

