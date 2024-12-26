const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string'){
    return false;
  }
  const activity = Number(sampleActivity);
  let age = 0;
  if(typeof activity === 'number' && activity > 0){
   age = Math.ceil((Math.log(MODERN_ACTIVITY / activity) * HALF_LIFE_PERIOD) / Math.log(2));
   if(age > 0){
    return age;
   }
   else{
    return false;
   }  
  }
  return false; 
}

module.exports = {
  dateSample
};
