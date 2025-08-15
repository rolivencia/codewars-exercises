// Solution for the 56a4addbfd4a55694100001f problem at CodeWars: Did she say hallo? (8 kyu)
const regex = new RegExp(/hello|ciao|salut|hallo|hola|ahoj|czesc/)
function validateHello(greetings) {
    return regex.test(greetings.toLowerCase())
}