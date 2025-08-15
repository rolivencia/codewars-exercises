// Solution for the 57cff961eca260b71900008f problem at CodeWars: Is there a vowel in there? (8 kyu)

function isVow(a){
    return a.map(item => isVowel(item) ? String.fromCharCode(item) : item)
}

function isVowel(letterCode) {
    const codes = ['a', 'e', 'i', 'o', 'u'].map(letter => letter.charCodeAt(0))
    return codes.includes(letterCode)
}
