// Solution for the 57f609022f4d534f05000024 problem at CodeWars: Find the stray number (7 kyu)

function stray(numbers) {
    // Check if first element is the stray
    if(numbers[0] !== numbers[1] && numbers[1] === numbers[2]){
        return numbers[0]
    }

    // Check all the others
    for(let i = 1; i<numbers.length; i++){
        if(numbers[i] !== numbers[i-1]){
            return numbers [i]
        }
    }
}