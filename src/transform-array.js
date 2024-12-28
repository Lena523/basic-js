const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

 let tempArr = [];
 for(let i = 0; i < arr.length; i += 1){
  if(arr[i + 1] === '--discard-prev'){
    if(Number(arr[i])){
      tempArr.push(arr[i]);
    }
    if(i + 2 <= arr.length - 1){
      tempArr[i] = arr[i + 2];
      i += 3;
    }
  }

  if(arr[i] !== '--discard-prev' && arr[i] !== '--discard-next' && arr[i] !== '--double-prev' && arr[i] !== '--double-next'){
    tempArr.push(arr[i]);
  }

  if(arr[i + 1] === '--discard-next'){
    if(i + 3 <= arr.length - 1){
      i += 3;
      while(typeof arr[i] !== 'number' && i < arr.length - 1){
        i += 1;
      }
      tempArr.push(arr[i]);
    }
  }

  if(arr[i + 1] === '--double-prev'){
    if(i - 1 >= 0){
      tempArr.push(arr[i]);
    }
  }

 if(arr[i] === '--double-next'){
  if(i + 1 <= arr.length - 1){
    tempArr.push(arr[i + 1]);
   }   
}
 }
 return tempArr;
}

module.exports = {
  transform
};
