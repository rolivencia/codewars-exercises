// Solution for the 54da539698b8a2ad76000228 problem at CodeWars: Take a Ten Minute Walk (6 kyu)

function getDirectionStepCount(walk, direction) {
  return walk.filter(step => step === direction).length
}

function isValidWalk(walk) {
  // We need to always have 10 steps
  if (walk.length !== 10) {
    return false
  }
  
  const checkNorthSouth = getDirectionStepCount(walk, 'n') === getDirectionStepCount(walk, 's')
  const checkEastWest = getDirectionStepCount(walk, 'e') === getDirectionStepCount(walk, 'w')

  return checkNorthSouth && checkEastWest
}
