// Solution for the 55849d76acd73f6cc4000087 problem at CodeWars: Online RPG: player to qualifying stage? (8 kyu)

const successMessage = "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."

function playerRankUp (points) {
  return points >= 100 ? successMessage : false
}
