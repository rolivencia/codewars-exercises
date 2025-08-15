// Solution for the 57ee99a16c8df7b02d00045f problem at CodeWars: Flatten and sort an array (7 kyu)

export function flattenAndSort(inputArray: number[][]): number[] {
  return inputArray.flat().sort((x,y) => x-y);
}
