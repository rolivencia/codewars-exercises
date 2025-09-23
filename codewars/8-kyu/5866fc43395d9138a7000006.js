// Solution to the 5866fc43395d9138a7000006 problem at CodeWars: Ensure question (8 kyu)

function ensureQuestion(s) {
    return s.slice(-1) === '?' ? s : `${s}?`
}