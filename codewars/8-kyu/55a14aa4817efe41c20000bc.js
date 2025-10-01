// Solution for the 55a14aa4817efe41c20000bc problem at CodeWars: Classy Extentions (8 kyu)

class Cat extends Animal {
    constructor(name){
        super()
        this.name = name
    }

    speak(){
        return `${this.name} meows.`
    }
}