// Solution for the 566fc12495810954b1000030 problem in CodeWars: 'Count the Digit' (7 kyu)

export class G964 {
    public static nbDig(n: number, d: number): number {
        return  Array(n+1)
            .fill(0)
            .map((_, index) => (index ** 2).toString().split('').filter(x => x === d.toString()))
            .filter(a => a.length > 0)
            .flat()
            .length
    }
}
