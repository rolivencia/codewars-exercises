// Solution for the 5713bc89c82eff33c60009f7 problem at CodeWars: Freudian translator (8 kyu)

function toFreud(string) {
    if(!string) return '';
    return new Array(string.split(' ').length).fill('sex').join(' ');
}