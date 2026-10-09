// Solution for the 55805ab490c73741b7000064 problem at CodeWars: Training on makeBackronym (7 kyu)

//preload variable: dict

var makeBackronym = function(string){
  return string.split('').map(letter => dict[letter.toUpperCase()]).join(' ');
};