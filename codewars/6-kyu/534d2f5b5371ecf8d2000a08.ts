// Solution for the 543d2f5b5371ecf8d2000a08 problem in CodeWars: 'Multiplication table' (6 kyu)

export function multiplicationTable (size: number): number[][] {
    const firstRow = generateArray(size, (_, i) => i + 1)
    return generateArray(size, (_, i) => firstRow.map(elem => elem * (i + 1)))
}

function generateArray(n: number, callback: (_: any, i: number) => any){
    return Array.from({ length: n }, callback)
}