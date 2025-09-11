// Solution for the 54bf1c2cd5b56cc47f0007a1 problem at CodeWars: Counting Duplicates (8 kyu)

export function duplicateCount(text: string): number{
    if(text.length === 0){
        return 0
    }

    const urns: { [key: string]: number } = {}

    for(let i = 0; i<text.length; i++){
        const character = text[i].toLowerCase()
        if(!urns[character]){
            urns[character] = 1
        } else {
            urns[character]++
        }
    }

    return Object.keys(urns).reduce((accum, value) => {
        if(urns[value] > 1){
            accum++
        }
        return accum
    }, 0)
}