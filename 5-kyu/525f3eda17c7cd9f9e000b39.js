// Solution for the 525f3eda17c7cd9f9e000b39 problem at CodeWars: Calculating with Functions

function recursion(number, calculation) {
    return (calculation) ? calculation.call(calculation, number) : number
}

function zero(calculation) {
    return recursion(0, calculation)
}
function one(calculation) {
    return recursion(1, calculation)

}
function two(calculation) {
    return recursion(2, calculation)
}
function three(calculation) {
    return recursion(3, calculation)
}
function four(calculation) {
    return recursion(4, calculation)
}
function five(calculation) {
    return recursion(5, calculation)
}
function six(calculation) {
    return recursion(6, calculation)
}
function seven(calculation) {
    return recursion(7, calculation)
}
function eight(calculation) {
    return recursion(8, calculation)
}
function nine(calculation) {
    return recursion(9, calculation)
}

function plus(numFunction) {
    return function(result){
        return result + numFunction
    }
}

function minus(numFunction) {
    return function(result){
        return result - numFunction
    }
}

function times(numFunction) {
    return function(result){
        return result * numFunction
    }
}

function dividedBy(numFunction) {
    return function(result){
        return Math.floor(result / numFunction)
    }
}
