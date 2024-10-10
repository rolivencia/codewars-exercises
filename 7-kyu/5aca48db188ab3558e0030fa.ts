// Solution for the 5aca48db188ab3558e0030fa problem in CodeWars: 'Find the calculation type' (7 kyu)

type Calculation = { result: number, calculationType: string }

export function calcType(a: number, b: number, res: number): string {

    const calculationTypes: Calculation[] = [
        {
            result: a + b,
            calculationType: 'addition'
        },
        {
            result: a * b,
            calculationType: 'multiplication'
        },
        {
            result: a - b,
            calculationType: 'subtraction'
        },
        {
            result: a / b,
            calculationType: 'division'
        },
    ]

    return calculationTypes.find(c => c.result === res)!.calculationType;
}
