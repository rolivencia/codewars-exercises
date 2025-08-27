// Solution for the 56fcfad9c7e1fa2472000034 problem at CodeWars: Evil or Odious (8 kyu)

function evil(n) {
    return n
        .toString(2)
        .split('')
        .reduce((accum, value) => accum + parseInt(value), 0)
    % 2 === 0 ? "It's Evil!" : "It's Odious!"
}