const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str.length === 0){
   return '';
  }
  let count = 1;
  let encodedStr = [];
  let tempArr = '';
  for(let i = 0; i < str.length; i += 1){
    while(str[i] === str[i + 1]){
     count += 1;
     i += 1;
    }
    if(count > 1){
       encodedStr.push(count);
       encodedStr.push(str[i])
       count = 1;
    }
    else{
      encodedStr.push(str[i]);
    }
  }
  return tempArr = encodedStr.join(''); 
 }

module.exports = {
  encodeLine
};
