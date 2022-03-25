const reverseString = function(string) {

  //iterate backwards through string into new string
  let reversedString = '';
  let i = string.length;
  
  while(i >= 0) {
    reversedString += string.charAt(i);
    i--;
  }
  return reversedString
};

// Do not edit below this line
module.exports = reverseString;
