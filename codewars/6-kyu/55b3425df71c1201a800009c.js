// Solution for the 55b3425df71c1201a800009c problem at CodeWars: Statistics for an Athletic Association (6 kyu)

function stat(strg) {
    if(!strg){
        return ''
    }

    const timesInSeconds = strg.split(', ').map(time => {
        const [hours, minutes, seconds] = time.split('|').map(n => parseInt(n))
        return hours * 3600 + minutes * 60 + seconds
    }).sort((a,b) => a-b)


    const range = Math.max(...timesInSeconds) - Math.min(...timesInSeconds)
    const averages = timesInSeconds.reduce((accum, value) => (accum + value), 0) / timesInSeconds.length
    const median = timesInSeconds.length % 2 !== 0 ?
        timesInSeconds[Math.floor(timesInSeconds.length / 2)] :
        (timesInSeconds[timesInSeconds.length / 2 - 1] + timesInSeconds[timesInSeconds.length / 2]) / 2

    console.log(range, averages, median)
    console.log(`Median: ${getHours(median)}|${getMinutes(median)}|${getSeconds(median)}`)

    return `Range: ${getHours(range)}|${getMinutes(range)}|${getSeconds(range)} ` +
        `Average: ${getHours(averages)}|${getMinutes(averages)}|${getSeconds(averages)} ` +
        `Median: ${getHours(median)}|${getMinutes(median)}|${getSeconds(median)}`
}

function getHours(seconds) {
    return `${Math.floor(seconds / 3600)}`.padStart(2, '0')
}

function getMinutes(seconds) {
    return `${Math.floor(seconds / 60) - getHours(seconds) * 60}`.padStart(2, '0')
}

function getSeconds(seconds) {
    return `${Math.floor(seconds - Math.floor(seconds / 60) * 60 )}`.padStart(2, '0')
}