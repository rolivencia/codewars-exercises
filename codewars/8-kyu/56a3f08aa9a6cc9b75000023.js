// Solution for the 56a3f08aa9a6cc9b75000023 problem at CodeWars: Simple validation of a username with regex (8 kyu)

function validateUsr(username) {
    const res = /^[a-z0-9_]{4,16}$/.test(username)
    return res
}
