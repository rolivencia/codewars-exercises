// Solution for the 5c8bfa44b9d1192e1ebd3d15 problem at CodeWars: A wolf in sheep's clothing (8 kyu)

export function warnTheSheep(queue: string[]): string {
    const wolfIndex = queue.lastIndexOf('wolf')
    const sheepIndex = queue.lastIndexOf('sheep')
    return wolfIndex > sheepIndex ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${queue.slice(wolfIndex + 1).length}! You are about to be eaten by a wolf!`;
}
