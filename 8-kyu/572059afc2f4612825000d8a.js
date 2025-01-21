// Solution for the 572059afc2f4612825000d8a problem at CodeWars: Training JS #8: Conditional statement--switch

function howManydays(month){

    switch(month){
        default:
            break;
    }

    const daysByMonth = {
        '1': 31,
        '2': 28,
        '3': 31,
        '4': 30,
        '5': 31,
        '6': 30,
        '7': 31,
        '8': 31,
        '9': 30,
        '10': 31,
        '11': 30,
        '12': 31
    }
    return daysByMonth[month.toString()];
}
