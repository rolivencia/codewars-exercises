// Solution for the 58bf9bd943fadb2a980000a7 problem at CodeWars: Who is going to pay for the wall? (8 kyu)

function whoIsPaying(name){
    return name.length > 2 ? [name, name.slice(0,2)] : [name]
}
