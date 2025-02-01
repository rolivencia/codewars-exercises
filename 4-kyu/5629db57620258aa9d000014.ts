// Solution for the 5629db57620258aa9d000014 problem at CodeWars: Strings Mix (4 kyu)

interface Entry {
    letter: string;
    length: number;
    entry: string;
}

export const mix = (s1:string, s2:string): string =>{
    console.log(s1,' | ', s2)
    const entries = [...processString(s1, 1), ...processString(s2, 2)]
        .sort((a,b) => (b.length - a.length))
        .reduce((accum, current) => {

            // Letter still not in accum object
            if(!accum[current.letter]){
                accum[current.letter] = {length: current.length, entry: current.entry.toString()}
                return accum
            }

            const existing = accum[current.letter]
            if(existing.length < current.length){
                accum[current.letter] = { length: current.length, entry: current.entry.toString() }
                return accum
            } else if(existing.length === current.length){
                accum[current.letter] = { ...accum[current.letter], entry: '=' }
                return accum
            }

            return accum
        }, {} as {[key: string]: {length: number, entry: string}})

    let result = Object.keys(entries)
        .map(key => ({ letter: key, length: entries[key].length, entry: entries[key].entry }))
        .sort((a,b) => sortByEntry(a,b))

    console.log(result)


    // your code here!
    return result.map(entry => `${entry.entry}:${new Array(entry.length).fill(entry.letter).join('')}`).join('/')
}

function processString (str: string, entry: 1 | 2): { letter: string, length: number, entry: 1 | 2}[] {
    return (str
        .split('')
        .filter(char => /^[a-z]+$/.test(char))
        .sort()
        .join('')
        .match(/(.)\1*/g) as string[])
        .filter(c => c.length > 1)
        .map(c => ({letter: c[0], length: c.length, entry: entry}))
}

function sortByEntry(a: Entry, b: Entry){
    if(a.length === b.length){
        if(a.entry > b.entry){
            return 1
        } else if(b.entry > a.entry){
            return -1
        }
        return 0
    }

    else return b.length - a.length
}
