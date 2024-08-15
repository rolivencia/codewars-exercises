// Solution for the 58356a94f8358058f30004b5 problem at CodeWars: Drone Fly-By (7 kyu)

export function flyBy(lamps: string, drone: string): string {
    return lamps
        .split('')
        .map((lamp, index) => index < drone.length ? 'o' : 'x')
        .join('')
}
