// Solution for the 53f1015fa9fe02cbda00111a problem at CodeWars: Color Ghost (8 kyu)

class Ghost {
    constructor(){
        const options = ['white', 'yellow', 'red', 'purple']
        const index = Math.round(Math.random() * 3)
        this.color = options[index]
    }
}