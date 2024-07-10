// Solution for the 58f8a3a27a5c28d92e000144 problem in CodeWars: Find the first non-consecutive number (8 kyu)

export function firstNonConsecutive (arr: number[]) : null | number {

    if(arr.length < 2){
        return null
    }

    return arr.slice(1).find((element, index) => element !== arr[index] + 1) ?? null
}
