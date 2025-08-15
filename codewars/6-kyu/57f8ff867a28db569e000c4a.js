// Solution for the 57f8ff867a28db569e000c4a problem at CodeWars: Kebabize (6 kyu)

function kebabize(str) {
    return str
        .replaceAll(/[0-9]/g, '')
        .split('')
        .map((letter, index) => letter.match(/[A-Z]/) ? `${index === 0 ? '' : '-'}${letter.toLowerCase()}` : letter)
        .join('')
}