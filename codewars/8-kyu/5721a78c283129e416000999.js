// Solution for the 5721a78c283129e416000999 problem at CodeWars: Training JS #10: loop statement --for (8 kyu)

function pickIt(arr){
    let odd=[], even=[];

    for(const item of arr){
        item % 2 === 0 ? even.push(item) : odd.push(item)
    }


    return [odd,even];
}
