// Solution for the 529eef7a9194e0cbc1000255 problem at CodeWars: Anagram Detection (7 kyu)

var isAnagram = function(test, original) {
    return prepareForAnagramComparison(test) === prepareForAnagramComparison(original)
};

function prepareForAnagramComparison(s){
    return s.toLowerCase().split('').sort().join('')
}
