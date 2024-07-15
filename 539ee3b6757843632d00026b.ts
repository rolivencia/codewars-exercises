// Solution for the 539ee3b6757843632d00026b problem in CodeWars: Find the capitals (7 kyu)

var capitals = function (word) {
	return word
    .split('')
    .map((letter, index) => letter.toUpperCase() === letter ? index : null)
    .filter(item => item !== null)
};
