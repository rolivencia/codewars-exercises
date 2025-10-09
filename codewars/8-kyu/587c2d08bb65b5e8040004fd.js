// Solution for the 587c2d08bb65b5e8040004fd problem at CodeWars: NBA full 48 minutes average (8 kyu)

function pointsPer48(ppg, mpg) {
    if(ppg === 0 || mpg === 0){
        return 0
    }
    return Math.round(((ppg / mpg) * 48) * 10) / 10
}