// Solution for the 54598d1fcbae2ae05200112c problem at CodeWars: Enumerable Magic #1 - True for All? (8 kyu)

function all( arr, fun ){
    if(arr.length === 0){
        return true
    }

    return arr.every(item => fun(item))
}
