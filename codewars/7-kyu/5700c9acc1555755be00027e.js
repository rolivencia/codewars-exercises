// Solution for the 5700c9acc1555755be00027e problem at CodeWars: All Inclusive? (7 kyu)

function containAllRots(strng, arr) {
    if(strng === ""){
        return true
    }

    const original = strng
    let mutable = strng

    do {

        console.log(mutable)

        if(arr.indexOf(mutable) === -1) {
            return false
            break;
        }

        mutable = mutable.slice(1).concat(mutable.slice(0,1))

    } while(original !== mutable)

    return true
}