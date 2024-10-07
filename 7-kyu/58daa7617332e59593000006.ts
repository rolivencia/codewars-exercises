// Solution for the 58daa7617332e59593000006 problem in CodeWars: 'Most digits' (7 kyu)

export class Kata {

    static findLongest(array:number[]):number {
        let result = 0;

        for(let i = result; i < array.length; i++){
            if(Kata.getNumberDigits(array[i]) > Kata.getNumberDigits(result)){
                result = array[i]
            }
        }

        return result
    }

    static getNumberDigits(n:number):number {
        return n.toString().split('').length;
    }
}
