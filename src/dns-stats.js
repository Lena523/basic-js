const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  if(domains.length === 0){
    return Object.fromEntries(domains);
  }
  let domainName;
  let stopPoint = '.';
  let splitArr = [];
  let reversedArr = [];
  let objArr = [];
  let count = 0;
  for(let i = 0; i < domains.length; i += 1){
    splitArr.push(domains[i].split(stopPoint));
  }
   splitArr[0] = splitArr[0].reverse();
  domainName = splitArr[0][0];
  splitArr[0] = splitArr[0].reverse();
  for(let i = 0; i < splitArr.length; i += 1){
    reversedArr.push(splitArr[i].reverse().join(stopPoint));
  }
  reversedArr.push(domainName);
  reversedArr = reversedArr.reverse();
  reversedArr = reversedArr.map((element) => stopPoint + element);
  for(let i = 0; i < reversedArr.length; i += 1){

    for(let j = 0; j < reversedArr.length; j += 1){
      if(j === 0 && i === 0){
        continue;
      }
      if(reversedArr[j].includes(reversedArr[i])){
        count += 1;
      }
    }
    objArr.push([reversedArr[i], count]);
    count = 0;
  }
  const obj = Object.fromEntries(objArr);
  return obj;
}

module.exports = {
  getDNSStats
};
