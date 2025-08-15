// Solution for the 550527b108b86f700000073f problem at CodeWars: PI approximation (6 kyu)

export function iterPi(epsilon: number): [number,number] {
    let iteration = 0
    let approximation = 0

    do {
        iteration++

        const num = ((-1) ** (iteration - 1))
        const denom = (iteration * 2 - 1)
        approximation = approximation + (num / denom)

    } while(Math.abs(Math.PI - 4 * approximation) > epsilon)

    return [iteration, parseFloat((approximation * 4).toFixed(10))]
}