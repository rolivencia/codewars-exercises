// Solution for the 5208f99aee097e6552000148 problem at CodeWars: Break camelCase (6 kyu)

function solution(string) {
    return string.split('').map(char => char.match(/([A-Z])/) ? ' ' + char : char).join('')
}