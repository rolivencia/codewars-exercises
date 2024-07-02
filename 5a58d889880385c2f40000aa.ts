// Solution for the 5a58d889880385c2f40000aa problem in CodeWars: Automorphic Number (Special Numbers Series #6) (7 kyu)

export function automorphic(n: number): string {
    const lastDigits = n.toString()
    const squareLastDigits = (n * n).toString().slice(-(lastDigits.length))
    return lastDigits === squareLastDigits ? 'Automorphic' : 'Not!!'
}
