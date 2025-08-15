// Solution for the 586f6741c66d18c22800010a problem at CodeWars: Sum of a sequence (7 kyu)

const sequenceSum = (begin, end, step) => {
    if(begin > end) {
        return 0
    }

    let result = 0

    for(let i = begin; i <= end; i += step){
        result += i
    }

    return result
};