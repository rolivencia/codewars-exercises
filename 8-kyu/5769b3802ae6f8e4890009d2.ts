// Solution for the 5769b3802ae6f8e4890009d2 problem in CodeWars: 'Removing Elements' (8 kyu)

function removeEveryOther(arr){
    return arr.filter((_, index) => index % 2 === 0)
}
