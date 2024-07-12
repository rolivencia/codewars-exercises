// Solution for the 586c1cf4b98de0399300001d kata on CodeWars: Grasshopper - Terminal game combat function (8 kyu)

function combat(health, damage) {

    const result = health - damage

    if(result < 0){
        return 0
    }

    return result
}