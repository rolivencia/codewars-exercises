// Solution for the 57873ab5e55533a2890000c7 problem in CodeWars: 'Correct the time-string' (7 kyu)

export function timeCorrect(timestring: string | null): string | null {

    // Validate null and empty
    if(timestring === null || timestring === ''){
        return timestring;
    }

    let [hours, minutes, seconds] = timestring.split(':').map(s => parseInt(s));

    if(!hours || !minutes || !seconds){
        return null;
    }

    if(seconds > 59){
        seconds = seconds % 60;
        minutes = minutes +1;
    }

    if(minutes > 59){
        minutes = minutes % 60;
        hours = hours + 1;
    }

    if(hours > 23){
        hours = hours % 24;
    }

    return [hours, minutes, seconds].map(n => n.toString().padStart(2, '0')).join(':')
}
