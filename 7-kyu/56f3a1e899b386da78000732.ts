// Solution for the 56f3a1e899b386da78000732 problem at CodeWars: Parts of a list (7 kyu)

export function partlist(arr: string[]): string[][] {

    if(arr.length === 0){
        return []
    }

    const result = [];

    for(let i = 1; i < arr.length; i++){
        const head = arr.slice(0,i).join(' ');
        const tail = arr.slice(i).join(' ')
        result.push([head, tail])
    }

    return result;
}
