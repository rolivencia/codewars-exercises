// Solution for the 55e8aba23d399a59500000ce problem at CodeWars: Grasshopper - Terminal Game #1

class Hero {
    // add default values here
    constructor(name, position, health, damage, experience) {
        this.name = name ?? 'Hero'
        this.position = position ?? '00'
        this.health = health ?? 100
        this.damage = damage ?? 5
        this.experience = experience ?? 0
    }
}