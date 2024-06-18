// Solution for 5a53a17bfd56cb9c14000003 problem in CodeWars: Disarium Number (Special Numbers Series #3) (7 kyu)

export function disariumNumber(n: number) {
    const evals = n.toString().split('').map(x => parseInt(x)).map((x,index) => x ** (index + 1)).reduce((x,y) => x+y, 0) === n

    return evals ? 'Disarium !!' : 'Not !!'
}
