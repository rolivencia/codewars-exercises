// Solution for the 57a429e253ba3381850000fb problem in CodeWars: 'Calculate BMI' (8 kyu)

export function bmi(weight: number, height: number): string {
    const bmi = parseFloat((weight / (height ** 2)).toFixed(1))

    if(bmi <= 18.5){
        return 'Underweight'
    }
    else if(bmi <= 25.0){
        return 'Normal'
    }
    else if(bmi <= 30.0){
        return 'Overweight'
    }
    else {
        return 'Obese'
    }
}
