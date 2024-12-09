// Solution for the 59df2f8f08c6cec835000012 problem at CodeWars: Meeting (6 kyu)

export function meeting(s: string): string {
    return s
        .toUpperCase()
        .split(';')
        .map(item => item.split(':'))
        .map(([name, surname]) => [surname, name] as [string, string])
        .sort((a, b) => sortFriends(a,b) )
        .map(([surname, name]) => `(${surname}, ${name})`)
        .join('')
}

function sortFriends(a: [string, string], b: [string, string]){
    if(a[0] > b[0]) {
        return 1
    }
    else if(a[0] < b[0]) {
        return -1
    }
    else if(a[1] > b[1]) {
        return 1
    }
    else if(a[1] < b[1]) {
        return -1
    }
    else {
        return 0
    }
}