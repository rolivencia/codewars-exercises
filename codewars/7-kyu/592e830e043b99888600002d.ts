// Solution for the 592e830e043b99888600002d problem at CodeWars: Digital cypher (7 kyu)

export function encode ( str:String, n:number):number[] {
    console.log(str, n)
    const cypher = n.toString().split('')
    const cypherModulo = n.toString().length
    return str
        .split('')
        .map((letter, index) => getCode(letter) + parseInt(cypher[index % cypherModulo]))
}

function getCode(letter: string): number{
    return letter.charCodeAt(0) - 96
}
