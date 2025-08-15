// Solution for the 57fb09ef2b5314a8a90001ed problem at CodeWars: Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

function replace(s){
    return s.replace(/[aeiouAEIOU]/g, '!')
}
