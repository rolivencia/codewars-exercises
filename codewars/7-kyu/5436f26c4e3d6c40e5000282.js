// Solution for the 5436f26c4e3d6c40e5000282 at CodeWars: Basic Sequence Practice (7 kyu)

function sumOfN(n) {
    return Array.from({ length: Math.abs(n)+1 }, (_, i) => i).map(i => {
        const value = sum0toNth(i)
        return n > 0 ? value : -value
    })
}

function sum0toNth(n){
    const value = (n * (n+1))/2
    return value
}