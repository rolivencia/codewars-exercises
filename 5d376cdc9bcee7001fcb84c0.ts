// Solution for the 5d376cdc9bcee7001fcb84c0 problem in CodeWars: 'Odd ones out!' (7 kyu)

export function oddOnesOut(nums: number[]) {
    let obj: any = {}
    for(const num of nums){
        if(!obj[num]){
            obj[num] = 0
        }
        obj[num]++
    }

    const filtered = Object.keys(obj).filter(key => obj[key] % 2 !== 0).map(n => parseInt(n))
    return nums.filter(n => !filtered.includes(n))
}