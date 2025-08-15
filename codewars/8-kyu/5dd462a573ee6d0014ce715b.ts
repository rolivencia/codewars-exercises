// Solution for the 5dd462a573ee6d0014ce715b problem in CodeWars: 'Check same case' (8 kyu)

export function sameCase(a : string, b : string): number {

    if(!a.match(/[a-z]/i) || !b.match(/[a-z]/i)){
        return -1;
    }

    return isUpperCase(a) && isUpperCase(b) || isLowerCase(a) && isLowerCase(b) ? 1 : 0
}

function isUpperCase(s: string): boolean {
    return s === s.toUpperCase()
}

function isLowerCase(s: string): boolean {
    return s === s.toLowerCase()
}
