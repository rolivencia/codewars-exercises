// Solution for the 56a5d994ac971f1ac500003e problem in CodeWars: 'Consecutive strings' (6 kyu)

export function longestConsec(strarr: string[], k: number): string {

    if(strarr.length === 0 || k > strarr.length || k <= 0 ){
        return ''
    }

    const concatenations: string[] = []

    for(let i = 0; i <= strarr.length - k; i++){
        concatenations.push(strarr.slice(i, i+k).join(''))
    }

    let result = concatenations[0]
    for(let c of concatenations){
        if(c.length > result.length){
            result = c
        }
    }

    return result
}
