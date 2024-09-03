// Solution for the 56269eb78ad2e4ced1000013 problem at CodeWars: Find the next perfect square! (7 kyu)

export function findNextSquare(sq:number):number {
    const squareRoot = Math.sqrt(sq);
    const isPerfectRoot = squareRoot === Math.floor(squareRoot)

    if(!isPerfectRoot){
        return -1;
    }

    return (squareRoot + 1) ** 2;
}
