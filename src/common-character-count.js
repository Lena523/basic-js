const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = [];
  const arrLengthOuter = s1.length < s2.length ? s1.length : s2.length; 
  const smallStr = s1.length < s2.length ? s1 : s2;
  let bigStr = s1.length < s2.length ? s2 : s1;
  const arrLengthInner = s1.length < s2.length ? s2.length : s1.length; 
  for(let i = 0; i < arrLengthOuter; i += 1 ){
    for(let j = 0; j < arrLengthInner; j  += 1){
      if(smallStr[i] === bigStr[j]){
        count.push(smallStr[i]);
        bigStr = bigStr.replace(smallStr[i], '');
        break;
      }
    }
  }
  return count.length;
}

module.exports = {
  getCommonCharacterCount
};
