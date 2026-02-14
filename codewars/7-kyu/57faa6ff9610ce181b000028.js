// Solution for the 57faa6ff9610ce181b000028 problem at Codewars: Clean up after your dog (7 kyu)

function crap(x, bags, cap){
    const capacity = bags * cap
    const squares = x.reduce((accum, value) => accum.concat(value), []).filter(c => c !== '_')

    const hasDog = squares.find(c => c === 'D')
    if(hasDog){
        return 'Dog!!'
    }

    return squares.length <= capacity ? 'Clean' : 'Cr@p'
}