// Solution for the 562f91ff6a8b77dfe900006e problem at CodeWars: Going to the cinema

function movie(card, ticket, perc) {
    let times = 1
    let aSystemValue = card
    let bSystemValue = 0

    while(Math.ceil(aSystemValue) >= bSystemValue) {
        aSystemValue += ticket * perc ** (times)
        bSystemValue += ticket
        times++
    }

    return times - 1
};