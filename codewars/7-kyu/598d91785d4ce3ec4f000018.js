// Solution for the 598d91785d4ce3ec4f000018 problem at CodeWars: Word values (7 kyu)

function getCharValue(c){

    if(!c || c === ' '){
        return 0
    }

    return c.charCodeAt(0) - 96
}

function wordValue(a) {
    return a
        .map(word => word.split('').reduce((accum, char) => accum + getCharValue(char), 0))
        .map((value, index) => value * (index + 1))
        ;
}

