// Add solution for the 5a87449ab1710171300000fd problem at CodeWars: Tidy Number (Special Numbers Series #9) (7 kyu)

export function tidyNumber(num: number): boolean {
    return num === parseInt(num.toString().split('').sort().join(''));
}
