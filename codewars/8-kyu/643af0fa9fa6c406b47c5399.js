// Solution for the 643af0fa9fa6c406b47c5399 problem at CodeWars: Quadrants (8 kyu)

function quadrant(x, y) {
    let quadrants = [1,2,3,4]

    if(x > 0) {
        quadrants = quadrants.filter(q => [1,4].includes(q))
    } else {
        quadrants = quadrants.filter(q => [2,3].includes(q))
    }

    if(y > 0){
        quadrants = quadrants.filter(q => [1,2].includes(q))
    } else {
        quadrants = quadrants.filter(q => [3,4].includes(q))
    }

    return quadrants[0]
}