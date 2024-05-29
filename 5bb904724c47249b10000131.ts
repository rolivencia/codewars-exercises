// Solution for the 5bb904724c47249b10000131 problem in CodeWars: 'Total amount of points' (8 kyu)

export function points(games : string[]): number {
    return games
        .map(game => {
            const [we, they] = game.split(':')
            return {we: parseInt(we), they: parseInt(they)}
        })
        .map((game): number => game.we - game.they === 0 ? 1 : game.we > game.they ? 3 : 0)
        .reduce((x,y) => x+y, 0)
}
