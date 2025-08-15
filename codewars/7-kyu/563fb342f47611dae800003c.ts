// Solution for the 563fb342f47611dae800003c problem in CodeWars: Trimming a string (7 kyu)

export function trim (str: string, size: number): string {

    if(str.length <= size){
        return str
    }

    if(str.slice(0,size).length <= 3){
        return str.slice(0,size) + '...';
    }

    return str.slice(0,size-3) + '...';
}
