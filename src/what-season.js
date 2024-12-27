const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    if(date === undefined){
    return 'Unable to determine the time of year!';
    }

   const check = date instanceof Date;
   if(check === false){
    throw new Error('Invalid date!');
   }

   const dateProperties = Object.getOwnPropertyNames(date) ;
   const dateCheck = new Date();
   const dateCheckProperties = Object.getOwnPropertyNames(dateCheck)
   if(dateProperties.length !== dateCheckProperties.length){
    throw new Error('Invalid date!');
   }

  let thisMonth;
  const month = date.getMonth();
  if(month < 2 || month === 11){
    thisMonth = 'winter';
  }
  if(month > 1 && month < 5){
    thisMonth = 'spring';
  }
  if(month > 4 && month < 8){
    thisMonth = 'summer';
  }
  if(month > 7 && month < 11){
    thisMonth = 'autumn';
  }
  return thisMonth;
}

module.exports = {
  getSeason
};
