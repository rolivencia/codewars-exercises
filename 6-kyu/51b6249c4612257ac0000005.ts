// Solution for the 51b6249c4612257ac0000005 problem at CodeWars: Roman Numerals Decoder (6 kyu)

const valueMaps: { [p: string]: number } = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

export function solution(roman: string): number {
    const arr = roman.split('')

    const result = arr.reduce((accum, letter, index) => {

        // If we have a next index within bounds and the current processed
        // letter is smaller than the next, then we substract that value from the result
        if(index + 1 <= arr.length && valueMaps[letter] < valueMaps[arr[index+1]]) {
            return accum -= valueMaps[letter]
        }

        return accum += valueMaps[letter]

    }, 0)

    return result
}
