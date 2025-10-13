// Solution to the 5803956ddb07c5c74200144e problem at CodeWars: Age Range Compatibility Equation (8 kyu)

function datingRange(age){
    if(age <= 14){
        return `${Math.floor(age - 0.10*age)}-${Math.floor(age + 0.10*age)}`
    }
    return `${Math.floor(age/2 + 7)}-${2*(age - 7)}`
}