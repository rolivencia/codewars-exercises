// Solution for the 596fba44963025c878000039 problem at CodeWars: Contamination #1 -String- (8 kyu)

function contamination(text, char){
    return Array(text.length).fill(char).join('')
}