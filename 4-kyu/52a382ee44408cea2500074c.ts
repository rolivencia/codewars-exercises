// Solution for the 52a382ee44408cea2500074c problem at CodeWars: Matrix Determinant (4 kyu)

function calculateMinor(row: number, column: number, m:number[][]): number[][] {
    const mRowRemoved = [...m.slice(0,row), ...m.slice(row+1)]
    const minor = mRowRemoved.map(r => [...r.slice(0,column), ...r.slice(column+1)])
    return minor
}

export function determinant(m:number[][]): number {

    // 1x1 matrix case
    if(m.length === 1){
        return m[0][0]
    }

    // 2x2 matrix case
    if(m.length === 2){
        return m[0][0]*m[1][1] - m[0][1]*m[1][0]
    }

    // General case
    const firstRow = m[0]
    let result = 0
    for(let j=0; j<firstRow.length; j++){
        result += (-1)**j * m[0][j] * determinant(calculateMinor(0,j,m))
    }

    return result;
}
