// Solution for the 54cb771c9b30e8b5250011d4 problem at CodeWars: Fabergé Easter Eggs crush test (3 kyu)

function height(eggs,tries) {
    if (eggs === 0 || tries === 0) {
        return 0;
    }

    let maxHeight = new BigNumber(0)
    let term = new BigNumber(1)

    for(let k = 1; k <= eggs; k++){
        term = term.times(tries - k + 1).dividedBy(k)
        maxHeight = maxHeight.plus(term)
    }

    return maxHeight

}