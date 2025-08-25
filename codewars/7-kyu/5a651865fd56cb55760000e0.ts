// Solution for the 5a651865fd56cb55760000e0 problem at CodeWars: Array Leaders (Array Series #3) (7 kyu)

export function arrayLeaders(numbers: number[]): number[] {

    const leaders = []
    let others = numbers.slice(0)

    do{
        let candidate = others[0]
        others = others.slice(1)
        let othersSum = others.reduce((accum, value) => accum + value, 0)

        console.log(candidate, othersSum)
        if(candidate > othersSum){
            leaders.push(candidate)
        }

    } while(others.length > 0)

    return leaders
}
