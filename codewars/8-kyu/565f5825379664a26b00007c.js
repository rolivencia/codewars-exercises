// Solution for the 565f5825379664a26b00007c problem at CodeWars: Surface Area and Volume of a Box (8 kyu)

function getSize(x, y, z) {
    return [2*x*y + 2*x*z + 2*y*z, x*y*z]
}

