// Solution for the 577bd8d4ae2807c64b00045b problem at CodeWars: Two fighters, one winner (7 kyu)

function declareWinner(fighter1, fighter2, firstAttacker) {
  
    const ordered = fighter1.name === firstAttacker ? [fighter1, fighter2] : [fighter2, fighter1]
 
    do {
      ordered[1].health = ordered[1].health - ordered[0].damagePerAttack
      console.log(`${ordered[0]} attacks ${[ordered[1]]}.${ordered[1].name} has now ${ordered[1].health} health`)
      
      if(ordered[1].health <= 0){
        return ordered[0].name
        break;
      }
      
      ordered[0].health = ordered[0].health - ordered[1].damagePerAttack
      console.log(`${ordered[1]} attacks ${[ordered[0]]}.${ordered[0].name} has now ${ordered[0].health} health`)

      if(ordered[0].health <= 0){
        return ordered[1].name
        break;
      }
      
      
    } while(ordered[0].health > 0 && ordered[1].health > 0)
  
    return fighter1.name;
}
