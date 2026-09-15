// Solution for the 59a1cdde9f922b83ee00003b problem at CodeWars: Stanton measure(7 kyu)

function stantonMeasure(a){
  if(a.length === 0){
    return 0
  }

  const occurencesOfOne = a.filter(x => x === 1).length
  const occurencesOfN = a.filter(x => x === occurencesOfOne).length
  return occurencesOfN
}
