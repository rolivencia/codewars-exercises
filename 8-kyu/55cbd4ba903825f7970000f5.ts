// Solution for the 55cbd4ba903825f7970000f5 problem in CodeWars: 'Grasshopper - Grade book' (8 kyu)


export function getGrade(a: number, b: number, c: number): string {

    const gradeMap = [
        {minScore: 90, letter: 'A'},
        {minScore: 80, letter: 'B'},
        {minScore: 70, letter: 'C'},
        {minScore: 60, letter: 'D'},
        {minScore: 0, letter: 'F'},
    ]

    const average = (a + b + c) / 3

    return gradeMap.find(grade => average >= grade.minScore)?.letter ?? 'F'
}
