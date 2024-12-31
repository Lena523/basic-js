const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 const number = String(n);
 let numbersArr = [];
 for(let i = 0; i < number.length; i += 1){
  numbersArr.push(Number(number.replace(number[i], '')));
 }
 let bigNumber = numbersArr[0];
 for(let i = 0; i < numbersArr.length; i += 1){
  if(bigNumber < numbersArr[i]){
    bigNumber = numbersArr[i];
  }
 }
 return bigNumber;
}

module.exports = {
  deleteDigit
};
