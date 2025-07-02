// Solution for the 5ab6538b379d20ad880000ab problem at CodeWars: Area or Perimeter (8 kyu)

const areaOrPerimeter = function(l , w) {
    return l === w ? l * w : 2 * l + 2 * w
};