// Solution for the 5a3fe3dde1ce0e8ed6000097 problem in CodeWars: Century From Year (8 kyu)

export const centuryFromYear = (year: number): number => {
  
  const division = year / 100
  const rounded = Math.floor(division)
  
  return division > rounded ? rounded + 1 : rounded
};
