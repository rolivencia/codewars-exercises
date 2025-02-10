// Solution for the 56eb0be52caf798c630013c0 problem at CodeWars: Unlucky Days (7 kyu)

export function unluckyDays(year: number): number {
    let unluckyDaysCount = 0

    for(let month=0; month<12; month++){
        const monthHasFridayThe13th = new Date(year, month, 13).getDay() === 5
        unluckyDaysCount += (monthHasFridayThe13th ? 1 : 0)
    }

    return unluckyDaysCount
}
