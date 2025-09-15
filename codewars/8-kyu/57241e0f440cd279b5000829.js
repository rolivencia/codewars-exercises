// Solution for the 57241e0f440cd279b5000829 problem at CodeWars: Sum of Multiples (8 kyu)

function sumMul(n,m){

    if(m <= 0){
        return "INVALID"
    }

    let result = 0
    for(let i = 1; i*n < m; i++){
        result += i*n
    }

    return result
}