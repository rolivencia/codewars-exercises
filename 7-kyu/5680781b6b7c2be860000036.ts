// Solution for the 5680781b6b7c2be860000036 problem at CodeWars: Find the vowels (7 kyu)

export function vowelIndices(word: string): number[] {
  const vowels = Object.freeze(['a', 'e', 'i', 'o', 'u', 'y'])
  return word
    .split('')
    .map((letter, index) => ({index: index, letter: letter.toLowerCase()}))
    .filter(letterMap => vowels.includes(letterMap.letter))
    .map(letterMap => letterMap.index + 1)
}
