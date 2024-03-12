export function specialNumber(n: number) {
    const numbers = n.toString().split('').map(s => parseInt(s))

    for(let number of numbers){
        if(number > 5){
            return 'NOT!!'
        }
    }

    return 'Special!!'
}
