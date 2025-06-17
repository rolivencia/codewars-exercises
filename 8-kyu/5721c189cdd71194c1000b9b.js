// Solution for the 5721c189cdd71194c1000b9b problem at CodeWars: Training JS #11: loop statement --break, continue (8 kyu)

function grabDoll(dolls){
    const bag = [];
    const acceptedElements = ['Hello Kitty', 'Barbie doll']

    for(let doll of dolls){
        if(bag.length === 3){
            break;
        }
        if(!acceptedElements.includes(doll)){
            continue
        }

        bag.push(doll);
    }

    return bag;
}
