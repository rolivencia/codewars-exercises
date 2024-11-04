// Solution for the 58989a079c70093f3e00008d problem at CodeWars: Cartesian neighbors (7 kyu)

export function cartesianNeighbor(x: number, y: number): number[][] {
    return [
        [x-1, y-1],
        [x-1, y],
        [x-1, y+1],
        [x, y-1],
        [x, y+1],
        [x+1, y-1],
        [x+1, y],
        [x+1, y+1]
    ];
}
