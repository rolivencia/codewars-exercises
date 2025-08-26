// Solution for the 554f76dca89983cc400000bb problem at CodeWars: Diophantine Equation (5 kyu)

function evaluate(x: number, y: number, n: number): boolean {
    return (x - 2 * y) * (x + 2 * y) === n
}

export function solequa(n: number): [number, number][] {
    const solutions: [number, number][] = []

    for(let a = 1;a <= Math.sqrt(n); a++) {
        let x = (n/a + a) / 2
        let y = (n/a - a) / 4

        if(!Number.isInteger(x) || !Number.isInteger(y)){
            continue
        }

        if(evaluate(x,y,n)){
            solutions.push([x, y]);
        }
    }

    return solutions
}