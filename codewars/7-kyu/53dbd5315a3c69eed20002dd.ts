// Solution for the 53dbd5315a3c69eed20002dd problem in CodeWars: List Filtering (7 kyu)

export function filter_list(l:Array<number | string>):Array<number> {
    return (l.filter(x => typeof(x) !== 'string') as Array<number>).filter(x => x >= 0)
}
