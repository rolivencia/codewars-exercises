// Solution for the 57277a31e5e51450a4000010 problem at CodeWars: Trainijg JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

function firstToLast(str,c){

    if(str.indexOf(c) === -1){
        return -1
    } else {
        return str.lastIndexOf(c) - str.indexOf(c)
    }

}