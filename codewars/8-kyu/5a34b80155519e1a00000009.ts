// Solution for the 5a34b80155519e1a00000009 problem in CodeWars: 'Multiple of index' (8 kyu)

export function multipleOfIndex(array: number[]):number[] {
    return array.filter((element, index) => element === 0 && index === 0 || element % index === 0)
}
