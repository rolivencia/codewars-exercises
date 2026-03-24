// Solution for the 5375f921003bf62192000746 problem at CodeWars: Word a10n (abbreviation) (6 kyu)

function a10n(string) {
    return string.slice(0,1).concat((string.length - 2).toString()).concat(string.slice(-1))
}

function abbreviate(string) {
    // Words shorter than 4 characters are returned without processing
    if(string.length < 4){
        return string
    }

    // Check for all-non-alphabetic string edge case
    if(string.split(/([a-zA-Z]+)/)[0] === string){
        return string
    }

    // Split the string with non-alphabetic characters as delimitators
    return string
        .split(/([^a-zA-Z]+)/)
        .filter(c => !!c)
        .reduce((accum, value) => {
            return accum.concat(
                value.length >= 4 && /^[a-zA-Z]+$/.test(value) ? a10n(value) : value
            )
        }, '')
}