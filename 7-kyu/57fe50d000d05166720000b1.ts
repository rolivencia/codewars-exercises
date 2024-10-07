// Solution for the 57fe50d000d05166720000b1 problem at CodeWars: Training on The Office VI - Sabbatical (7 kyu)

export function sabb(s: string, val: number , happiness: number ): string{  
  const sabbatical = 'Sabbatical! Boom!'
  const backToWork = 'Back to your desk, boy.'
  const letterCount = s.split('').filter(c => 'sabbatical'.includes(c)).length
  return val + happiness + letterCount > 22 ? sabbatical : backToWork
}
