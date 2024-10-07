// Solution for the 59b844528bcb7735560000a0 problem in CodeWars: 'Nice Array' (7 kyu)

export function isNice(arr:number[]): boolean {

    if(arr.length === 0){
        return false
    }

    return arr.filter(n => arr.includes(n-1) || arr.includes(n+1)).length === arr.length;
}
