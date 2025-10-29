// Solution for the 5a9e86705ee396d6be000091 problem at Codewars: Check three and two (7 kyu)

function checkThreeAndTwo(array) {
    const values = array.reduce((accum, value) => {

        const keys = Object.keys(accum)

        if(!keys.includes(value.toString())) {
            accum[value] = 1
        } else {
            accum[value] = accum[value] + 1
        }

        return accum
    }, {})

    const [first, second] = Object.values(values)

    if(first < 2 || second < 2){
        return false
    }

    return first + second === 5
}