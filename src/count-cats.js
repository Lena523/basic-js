const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const cats = matrix.flat(Infinity);
  const catsFound = cats.filter((cat) => cat === '^^');
  if(catsFound.length === 0){
    return 0;
  }
  return catsFound.length;
}

module.exports = {
  countCats
};
