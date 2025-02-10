// Solution for the 5bd776533a7e2720c40000e5 problem at Codewars: The Poet And The Pendulum (7 kyu)

export function pendulum(values: number[]) {
    const minimum = Math.min(...values)
    const others = values.sort((a,b) => a-b).slice(1)
    return others.filter((value, index) => index % 2 !== 0).reverse()
        .concat([minimum])
        .concat(others.filter((value, index) => index % 2 === 0))
}
