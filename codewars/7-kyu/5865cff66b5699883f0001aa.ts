// Solution for the 5865cff66b5699883f0001aa problem in CodeWars: All Star Code Challenge #22 (7 kyu)

export function toTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours} hour(s) and ${minutes} minute(s)`
}
