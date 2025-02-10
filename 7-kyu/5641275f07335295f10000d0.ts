// Solution for the 5641275f07335295f10000d0 problem at CodeWars: Split The Bill (7 kyu)

export function splitTheBill(x: {[k: string]: number}): {[k: string]: number} {
    const mean = Object.keys(x).reduce((accum, key) => x[key] + accum, 0) / Object.keys(x).length

    for(let key in x){
        x[key] = parseFloat((x[key] - mean).toFixed(2))
    }

    return x;
}
