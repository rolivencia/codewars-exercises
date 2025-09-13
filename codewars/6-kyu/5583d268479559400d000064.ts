// Solution for the 5583d268479559400d000064 problem at CodeWars: Binary to Text (ASCII) Conversion (6 kyu)

export function binaryToString(binary: string) {
    let sourceAsArray = binary.split('')
    let decimal: string[] = []

    while(sourceAsArray.length !== 0) {
        decimal = decimal.concat(sourceAsArray.splice(0, 8).join(''))
    }

    return decimal.map(c => String.fromCharCode(parseInt(c, 2))).join('');
}