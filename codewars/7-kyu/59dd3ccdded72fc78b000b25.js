// Solution for the 59dd3ccdded72fc78b000b25 problem at CodeWars: Return the day (7 kyu)

function whatday(num) {
    if(num < 1 || num > 7){
        return 'Wrong, please enter a number between 1 and 7'
    }

    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][num-1]
}
