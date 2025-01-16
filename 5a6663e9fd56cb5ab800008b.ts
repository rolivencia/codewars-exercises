// Solution for the 5a6663e9fd56cb5ab800008b problem at CodeWars: Cat years, Dog years (8 kyu)

export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  // Your code here!
  return [humanYears,transformCat(humanYears),transformDog(humanYears)];
}

function transformCat(humanYears: number): number {
  switch (humanYears) {
      case 1:
        return 15
      case 2:
        return 24
      default:
        return 24 + (humanYears - 2) * 4
  }
}

function transformDog(humanYears: number): number {
  switch (humanYears) {
      case 1:
        return 15
      case 2:
        return 24
      default:
        return 24 + (humanYears - 2) * 5
  }
}

