// Solution for the 56582133c932d8239900002e problem at Codewars: Find Count of Most Frequent Iten in an Array

function mostFrequentItemCount(collection) {

    if(collection.length === 0){
        return 0
    }

    return Math.max(...Object.values(collection.reduce((accum, value) => {

        const keys = Object.keys(accum)

        if(!keys.includes(value.toString())) {
            accum[value] = 1
        } else {
            accum[value] = accum[value] + 1
        }

        return accum
    }, {})))
}