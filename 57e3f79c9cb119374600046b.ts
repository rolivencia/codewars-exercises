// Solution for the 57e3f79c9cb119374600046b problem in CodeWars: 'Hello, Name or World!' (8 kyu)

export function hello(name = ''): string {

    if(!name){
        return 'Hello, World!'
    }

    return `Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
}
