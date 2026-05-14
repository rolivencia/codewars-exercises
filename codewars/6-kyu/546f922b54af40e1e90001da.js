// Solution for the 546f922b54af40e1e90001da problem at CodeWars: Replace With Alphabet Position (6 kyu)

function alphabetPosition(text) {
  return text
    .replace(/[^a-zA-Z]/g, '')
    .toLowerCase()
    .split('')
    .map(letter => letter.charCodeAt(0) - 96)
    .join(' ');
}
