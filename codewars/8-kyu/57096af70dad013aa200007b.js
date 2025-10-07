// Solution to the 57096af70dad013aa200007b problem at CodeWars: Logical calculator

function logicalCalc(array, op){
    let result = false

    switch(op){
        case 'AND':
            result = array.indexOf(false) !== -1 ? false : true
            break;
        case 'OR':
            result = array.indexOf(true) !== -1 ? true : false
            break;
        case 'XOR':
            const head = array[0]
            const tail = array.slice(1)
            result = tail.reduce((accum, value) => {
                return accum !== value
            }, head)
            break;
    }
    return result
}