// Solution for the 52adc142b2651f25a8000643 problem at CodeWars: Sleigh authentication (8 kyu)

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === 'Santa Claus' && password === 'Ho Ho Ho!'
};