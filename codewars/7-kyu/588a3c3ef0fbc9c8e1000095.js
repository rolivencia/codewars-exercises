// Solution for the 588a3c3ef0fbc9c8e1000095 problem at CodeWars: max diff - easy (7 kyu)

function maxDiff(list) {

    if(list.length === 0){
        return 0
    }

    return Math.max(...list) - Math.min(...list)
};