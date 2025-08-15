// Solution for the 55a996e0e8520afab9000055 problem at CodeWars: Who ate the cookie? (8 kyu)

function who(value){
    switch(typeof value){
        case 'string':
            return 'Zach'
        case 'number':
            return 'Monica'
        default:
            return 'the dog'
    }
}

function cookie(x){
    return `Who ate the last cookie? It was ${who(x)}!`
}
