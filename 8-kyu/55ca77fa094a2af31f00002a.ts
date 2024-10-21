// Solution for the 55ca77fa094a2af31f00002a problem at CodeWars: Grasshopper - Messi Goals (8 kyu)

var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = [laLigaGoals, championsLeagueGoals, copaDelReyGoals].reduce((accum, value) => accum + value, 0)
