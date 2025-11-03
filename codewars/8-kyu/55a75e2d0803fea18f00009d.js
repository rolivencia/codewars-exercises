// Solution for the 55a75e2d0803fea18f00009d problem at Codewars: Find the Slope (8 kyu)

function slope(points)
{
    const [x1,y1,x2,y2] = points

    if(x2-x1 === 0){
        return 'undefined';
    }

    return ((y2-y1)/(x2-x1)).toString()
}