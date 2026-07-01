// Solution for the 55e2adece53b4cdcb900006c problem at CodeWars: Tortoise racing (6 kyu)

function race(v1, v2, g) {
    if(v1>=v2){
        return null
    }

    const decimalTime = -g/(v1-v2)
    const hours = Math.floor(decimalTime)
    const minutes = Math.floor(decimalTime * 60) - hours * 60
    const seconds = Math.floor(decimalTime * 3600) - hours * 3600 - minutes * 60

    return [hours, minutes, seconds]
}

