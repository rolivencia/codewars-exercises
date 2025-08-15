// Solution for the 54ff0d1f355cfd20e60001fc problem at CodeWars: Factorial (7 kyu)

function factorial(n)
{

    if(n < 0 || n > 12){
        throw new RangeError('Values lower than 0 and greater than 12 are not allowed')
    }

    let i = 1;
    let result = 1

    while(i <= n){
        result *= i
        i++
    }

    return result
}