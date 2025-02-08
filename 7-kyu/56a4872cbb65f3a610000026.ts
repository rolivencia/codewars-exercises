// Solution for the 56a4872cbb65f3a610000026 problem at CodeWars: Rotate for a Max (7 kyu)

export function maxRot(n: number): number {

    const number = n.toString().split('').map(d => parseInt(d))
    let max = n;

    for(let i = 0; i < number.length; i++){
        const firstDigit = number.splice(i,1).pop() as number
        number.push(firstDigit)

        if(max < parseInt(number.join(''))) {
            max = parseInt(number.join(''))
        }
        console.log(i, firstDigit, number.toString())
    }

    return max
}
