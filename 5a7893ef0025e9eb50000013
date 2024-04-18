// Solution for the 5a7893ef0025e9eb50000013 problem in CodeWars: 'Maximum Gap' (7 kyu)

export function maxGap(nums: number[]): number {  
  const adjacentDifferences = nums
    .sort((a,b) => a-b)
    .map((item, index) => index === 0 ? 0 : item - nums[index-1])
  return Math.max(...adjacentDifferences)
}
