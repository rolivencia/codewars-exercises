// Solution for the 57a083a57cb1f31db7000028 problem in CodeWars: 'Powers of 2' (8 kyu)
export function powersOfTwo(n:number):number[]{
    return [...Array(n+1).keys()].map(item => 2 ** item);
}
