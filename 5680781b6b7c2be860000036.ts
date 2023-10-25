export function vowelIndices(word: string): number[] {
  const vowels = Object.freeze(['a', 'e', 'i', 'o', 'u', 'y'])
  return word
    .split('')
    .map((letter, index) => ({index: index, letter: letter.toLowerCase()}))
    .filter(letterMap => vowels.includes(letterMap.letter))
    .map(letterMap => letterMap.index + 1)
}
