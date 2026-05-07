// Solution for the 52ea928a1ef5cfec800003ee problem at CodeWars: IPv4 to int32 (6 kyu)

function ipToInt32(ip) {
    return parseInt(ip
        .split('.')
        .map(octet => parseInt(octet).toString(2))
        .map(octet => octet.padStart(8, '0'))
        .join(''), 2)
}