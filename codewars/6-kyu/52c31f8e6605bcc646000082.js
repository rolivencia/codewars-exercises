// Solution for the 52c31f8e6605bcc646000082 problem at CodeWars: Two Sum (6 kyu)
function twoSum(numbers, target) {
    const result = []

    for(let i = 0; i < numbers.length-1; i++){
        for(let j = 1; j < numbers.length; j++){
            if(numbers[i]+numbers[j] === target){
                result.push(i, j)
            }
        }
    }

    return result
}
