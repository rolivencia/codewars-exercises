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

// I print the result of the first part of the challenge
console.log(resultPartOne)

// Solution for the second part of the challenge
const countMap: number[] = [];

for(let value of leftLine){
    const multiple = value * rightLine.filter(v => v === value).length
    if(multiple > 0) {
        countMap.push(multiple)
    }
}

const resultPartTwo: number = countMap.reduce((accum, value) => accum + value, 0)

// I print the result of the second part of the challenge
console.log(resultPartTwo)

