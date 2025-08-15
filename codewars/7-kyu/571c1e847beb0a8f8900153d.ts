// Solution for the 571c1e847beb0a8f8900153d problem in CodeWars: 'Help Suzuki rake his garden!' (7 kyu)

export function rakeGarden(garden:string):string {
    return garden.split(' ').map(item => !['gravel', 'rock'].includes(item) ? 'gravel' : item).join(' ')
}
