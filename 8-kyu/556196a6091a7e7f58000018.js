// Solution for the 556196a6091a7e7f58000018 problem at CodeWars: Largest pair sum in array (8 kyu)

function largestPairSum (numbers) {
    let result = -Infinity

    for(let i = 0; i < numbers.length ; i++){
        for(let j = 0; j < numbers.length ; j++){
            if(i === j){
                continue
            }

            if(numbers[i] + numbers[j] > result){
                result = numbers[i] + numbers[j]
            }
        }
    }

    return result
}
