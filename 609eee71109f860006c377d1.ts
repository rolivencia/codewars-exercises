// Solution for the 609eee71109f860006c377d1 problem in CodeWars: 'Last Survivor' (7 kyu)

export function lastSurvivor(letters: string, coords: number[]): string {

    let result = letters;

    for(let i = 0; i < coords.length; i++){
        result = result.slice(0, coords[i]) + result.slice(coords[i]+1)
    }

    return result
}
