// Solution for the 54fe05c4762e2e3047000add problem at CodeWars: OOP: Object Oriented Piracy (8 kyu)

class Ship {
    constructor(draft, crew) {
        this.draft = draft
        this.crew = crew
    }

    isWorthIt() {
        return this.draft - 1.5 * this.crew > 20
    }

}