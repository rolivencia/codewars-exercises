// Solution for the 5174a4c0f2769dd8b1000003 problem at CodeWars: Sort Numbers (7 kyu)

function solution(nums){
    if(!nums){
        return []
    }

    return nums.sort((a,b) => a-b)
}
