// Solution for the 2873. Maximum Value of an Ordered Triplet I problem at LeetCode

function maximumTripletValue(nums: number[]): number {
    let max = 0

    for(let k = 2; k < nums.length; k++){
        for(let j = 1; j < k; j++){
            for(let i = 0; i < j; i++) {
                const value = (nums[i] - nums[j]) * nums[k]
                if(value > max) {
                    max = value
                }
            }
        }
    }

    return max
};