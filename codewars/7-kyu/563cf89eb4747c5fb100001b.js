// Solution for the 563cf89eb4747c5fb100001b problem at CodeWars: Remove the minimum (7 kyu)

function removeSmallest(numbers) {
    if(numbers.length < 2){
        return []
    }

    const indexOfFirstMin = numbers.indexOf(Math.min(...numbers))
    return numbers.slice(0,indexOfFirstMin).concat(numbers.slice(indexOfFirstMin+1));
}