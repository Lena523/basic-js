const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const strString = typeof str === 'string' ? str : String(str);
  const additionString = typeof options.addition === 'string' ? options.addition : String(options.addition);
  const separatorString =  Boolean(options.separator) === false ? '+' : options.separator;
  const additionSeparatorString = Boolean(options.additionSeparator) === false ? '|' : options.additionSeparator;
  const repeatString = Boolean(options.repeatTimes) === false ? 1 : options.repeatTimes;
  const repeatAdditionalString = Boolean(options.additionRepeatTimes) === false ? 1 : options.additionRepeatTimes;
  let finalStr = [];
  for(let i =0; i < repeatString; i +=1){
     finalStr.push(strString);
     for(let j = 0; j < repeatAdditionalString; j += 1){
      if(additionString === 'undefined'){
        break;
      }
      finalStr.push(additionString);
      if(j !== repeatAdditionalString - 1){
        finalStr.push(additionSeparatorString);
      }
     }
     if(i !== repeatString - 1){
      finalStr.push(separatorString);
     }
  }
  const output = finalStr.join('');
  return output;
}

module.exports = {
  repeater
};


