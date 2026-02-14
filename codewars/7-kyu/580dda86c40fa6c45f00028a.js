// Solution for the 580dda86c40fa6c45f00028a problem at CodeWars: Sum of Odd Cubed Numbers (7 kyu)

function cubeOdd(arr) {

    if(arr.find(item => isNaN(item))){
        return undefined
    }

    return arr.reduce((accum, value) => {
        if(value % 2 === 0){
            return accum
        }

        return accum += Math.pow(value, 3)

    }, 0);
}