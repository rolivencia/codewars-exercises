// Solution for the 5a4e3782880385ba68000018 problem at CodeWars: Balanced Number (Special Numbers Series #1 )

function sum(str: string){
    return str.split('').reduce((accum, value) => accum + parseInt(value), 0)
}

export function balancedNum(number: number): string {
    const asString = number.toString()

    const left = asString.slice(0, asString.length %2 === 0 ? asString.length / 2 - 1 : asString.length / 2)
    const right = asString.slice(asString.length / 2 + 1, asString.length)

    console.log(left, right)

    const balanced = sum(left) === sum(right)

    return balanced ? 'Balanced' : 'Not Balanced';
}

