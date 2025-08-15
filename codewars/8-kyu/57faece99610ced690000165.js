// Solution for the 582e0e592029ea10530009ce problem at CodeWars: Duck Duck Goose (8 kyu)

function duckDuckGoose(players, goose) {
    const seat = (goose - 1) < players ? (goose - 1) : (goose - 1) % players.length
    console.log(players, seat)
    return players[seat].name
}
