// Solution for the 59727ff285281a44e3000011 problem at CodeWars: Band name generator (7 kyu)

function bandNameGenerator(str) {
  const plain = str.toLowerCase()
  
  if(plain[0] === plain[plain.length - 1]){
    const withoutFirstLetter = plain.slice(1)
    const firstLetterCapitalized = plain[0].toUpperCase()
    return firstLetterCapitalized + withoutFirstLetter + withoutFirstLetter
  }
  
  return 'The ' + plain[0].toUpperCase() + plain.slice(1)
}