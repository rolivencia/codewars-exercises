// Solution for the 544d114f84e41094a9000439 problem at CodeWars: Power of 4 (7 kyu)

export function powerOf4(n: any): boolean {
    console.log(n)

    if(typeof n !== 'number' || n <= 0){
        return false
    }

    return Number.isInteger(Math.log(n)/Math.log(4));
}