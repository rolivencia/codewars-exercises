// Solution for the 576757b1df89ecf5bd00073b problem at CodeWars: Build Tower (6 kyu)

function towerBuilder(nFloors) {
    const maxNumberOfStars = (nFloors - 1) * 2 + 1
    const sol = Array(nFloors).fill(' ').map((value, index) => {
        const halfSpaces = index
        const stars = Array(maxNumberOfStars - (index * 2)).fill('*').join('');
        const pad = Array(index).fill(' ')
        return [...pad, ...stars, ...pad].join('')
    })

    return sol.reverse()
}
