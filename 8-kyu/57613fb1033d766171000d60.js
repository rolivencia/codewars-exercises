// Solution for the 57613fb1033d766171000d60 problem at CodeWars: UEFA EURO 2016 (8 kyu)

function uefaEuro2016(teams, scores){
    return `At match ${teams[0]} - ${teams[1]}, ${calculateResult(teams, scores)}`
}

function calculateResult(teams, scores){
    if(scores[0] === scores[1]){
        return 'teams played draw.'
    }

    if(scores[0] > scores[1]){
        return `${teams[0]} won!`
    }

    if(scores[1] > scores[0]){
        return `${teams[1]} won!`
    }
}
