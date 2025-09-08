// Solution for the 58dced7b702b805b200000be problem at CodeWars: Geometry Basics: Distance between points in 2D (8 kyu)

function distanceBetweenPoints(a, b) {
    // Used multiplication instead of power of 2 here for performance reasons
    return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y))
}