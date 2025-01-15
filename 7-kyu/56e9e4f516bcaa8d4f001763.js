// Solution for the 56e9e4f516bcaa8d4f001763 problem at CodeWars: Sum of numbers from 0 to N (7 kyu)

var SequenceSum = (function() {
    function SequenceSum() {}

    SequenceSum.showSequence = function(count) {

        if(count === 0){
            return `${count}=0`
        }
        if(count < 0){
            return `${count}<0`
        }

        const numbers = Array.from(Array(count + 1).keys())
        return numbers.join('+').concat(' = ').concat((count * (count+1)) / 2)
    };

    return SequenceSum;

})();
