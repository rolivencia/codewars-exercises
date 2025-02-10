// Solution for the 55b051fac50a3292a9000025 problem at CodeWars: Filter the number (7 kyu)

function filterString(value) {
    return parseInt(value.replace(/\D/g, ''));
}
