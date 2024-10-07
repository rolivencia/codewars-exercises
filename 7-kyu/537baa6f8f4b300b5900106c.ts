// Solution for the 537baa6f8f4b300b5900106c problem in CodeWars: 'Area of a Circle' (7 kyu)

export function circleArea(radius: number): number {

    if(radius <= 0){
        throw new Error('Number is not positive!')
    }

    return Math.PI * radius ** 2;
}
