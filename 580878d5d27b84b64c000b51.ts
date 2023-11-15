function sumFromOneToN(n: number){
    return (n * (n+1))/2
}

export function sumTriangularNumbers(n:number):number {

    if(n <= 0){
        return 0
    }

    return Array.from({length: n}, (_, i) => i + 1).map(n => sumFromOneToN(n)).reduce((x,y) => x+y, 0);
}
