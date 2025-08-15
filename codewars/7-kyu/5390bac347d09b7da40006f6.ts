// Solution for the 5390bac347d09b7da40006f6 problem at CodeWars: Jaden Casing Strings (7 kyu)

String.prototype.toJadenCase = function () {
    return this.split(" ").map(s => s[0].toUpperCase() + s.slice(1)).join(" ")
}


interface String {      // Declaration needed, don't remove it
    toJadenCase(): string;
}
