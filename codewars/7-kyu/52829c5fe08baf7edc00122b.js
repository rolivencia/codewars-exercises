// Solution for the 52829c5fe08baf7edc00122b problem at CodeWars: Number Of Occurrences (7 kyu)

Object.defineProperty(Array.prototype, 'numberOfOccurrences',{
    value : function numberOfOccurrences(element) {
        return this.filter(e => element === e).length
    }
});