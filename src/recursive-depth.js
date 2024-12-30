const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor(){
    this.max = 0;
    this.current = 0;
   }
   calculateDepth = (arr, depth = 1) => {
     this.max = depth;
    for (let obj of arr){
        if (Array.isArray(obj)) {
            this.current = this.calculateDepth(obj, depth + 1);
            this.max = this.current > this.max ? this.current : this.max;
        }       
    }
    return this.max; 
   }
}


module.exports = {
  DepthCalculator
};
