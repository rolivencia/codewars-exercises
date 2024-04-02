// Solution for the 56ed20a2c4e5d69155000301 problem in CodeWars: 'Scaling Squared Strings' (7 kyu)

export const scale = (s:string, k:number, n:number): string =>{

    const stringSquare: string[] = s.split('\n')

    // Handles case of string with only break line characters
    if(stringSquare.filter(row => row !== '').length === 0){
        return '';
    }

    let result: string[] = []

    // Horizontal scaling
    if(k > 0){
        result = stringSquare.map(row => row.split('').map(letter => Array(k+1).join(letter)).join(''))
    }

    // Vertical scaling
    if(n > 0){
        result = result.map(row => Array(n).fill(row).join('\n')).flat()
    }

    return result.join('\n')
}
