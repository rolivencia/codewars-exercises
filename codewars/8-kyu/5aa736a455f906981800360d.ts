// Solution for the 5aa736a455f906981800360d problem in CodeWars: 'The Feast of Many Beasts' (8 kyu)

export function feast(beast:string, dish:string):boolean {
    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1)
}
