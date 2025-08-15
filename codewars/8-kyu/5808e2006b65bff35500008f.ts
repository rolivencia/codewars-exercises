// Solution for the 5808e2006b65bff35500008f problem at CodeWars: Find the position! (8 kyu)

export function position(alphabet:string):string {
  return `Position of alphabet: ${alphabet.toLowerCase().charCodeAt(0)-96}`;
}
