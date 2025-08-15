// Solution for the 52efefcbcdf57161d4000091 problem at CodeWars: Count characters in your string (6 kyu)

function count(string) {

    if(Object.keys(string).length === 0){
      return {}
    }
  
    return string.split('').reduce((accum, value) => {
      if(!accum[value]) {
        accum[value] = 1
      }
      else {
        accum[value] += 1;
      }
      return accum
    }, {});
  }