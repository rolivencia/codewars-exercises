// Solution for the 5506b230a11c0aeab3000c1f5506b230a11c0aeab3000c1f problem in CodeWars: 'Deodorant Evaporator' (7 kyu)

export function evaporator(content: number, evapPerDay: number, threshold: number): number {

    let days = 0;
    const initialContent = content;

    while(content >= initialContent * ((threshold)/100)){
        content = content * ((100 - evapPerDay)/100)
        days ++;
    }

    return days
}
