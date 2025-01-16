// Solution for the 5a55f04be6be383a50000187 problem at CodeWars: Special Number (Special Numbers Series #5) (7 kyu)

export function specialNumber(n: number) {
    const numbers = n.toString().split('').map(s => parseInt(s))

    for(let number of numbers){
        if(number > 5){
            return 'NOT!!'
        }
    }

    return 'Special!!'
}
