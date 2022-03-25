const removeFromArray = function(startingArray, ...remove) {
  let args = Array.from(remove);

  // .filter passes the array element to the arrow function which then checks
  // the to see if the element (item) is in the args array. If the element is 
  // found in the args array .includes returns true. The ! operator makes it
  // false so that the element is NOT included in the new, filtered array.  
  startingArray = startingArray.filter(item => !args.includes(item));

  return startingArray;
}

// Do not edit below this line
module.exports = removeFromArray;
