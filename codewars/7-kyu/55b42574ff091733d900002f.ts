// Solution for the 55b42574ff091733d900002f problem at CodeWars: Friend or Foe? (7 kyu)

export function friend(friends: string[]): string[] {
    return friends.filter(friend => friend.length === 4)
}
