// Solution for the 570e8ec4127ad143660001fd problem at CodeWars: Name on billboard (8 kyu)

function billboard(name, price = 30){
    return name.split('').reduce((accum, _) => accum + price, 0)
}