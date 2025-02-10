// Solution for the 56598d8076ee7a0759000087 problem at CodeWars: Tip Calculator (8 kyu)

function calculateTip(amount, rating) {
    let tip = 0
    let percentage = 0

    switch(rating.toLowerCase()){
        case 'terrible':
            percentage = 0
            break
        case 'poor':
            percentage = 0.05
            break
        case 'good':
            percentage = 0.10
            break
        case 'great':
            percentage = 0.15
            break
        case 'excellent':
            percentage = 0.20
            break
        default:
            return 'Rating not recognised'
    }

    return Math.ceil(amount * percentage)
}
