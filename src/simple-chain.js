const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
  if(this.chain.length === 0){
    if(String(value) === ''){
       this.chain.push(`('(  )')`);
    }
    else{
       this.chain.push(`( ${String(value)} )`);
    }
  }
  else{
    if(String(value) === ''){
      this.chain.push('~~' + `('(  )')`);
    }
    else{
      this.chain.push('~~' + `( ${String(value)} )`);     
    }   
  }
  return this;
  },
  removeLink( position) {
    if(!Number.isInteger(position) || position <= 0 || position > this.chain.length){
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
      const point = position - 1;
      if(point === 0){
        let tempStr = this.chain[1].slice(2);
        this.chain[1] = tempStr;
      }
      function arrFilter(element, index){
        if(index !== point){
          return element;
        }
      }
      let tempArr = this.chain.filter(arrFilter);
      this.chain = tempArr;
      return this;
  },
  reverseChain() {
    if(this.chain.length > 1){
          let tempStr = this.chain[this.chain.length - 1].slice(2);
    this.chain[this.chain.length - 1] = tempStr;
    tempStr = '~~' + this.chain[0];
    this.chain[0] = tempStr;
    const reversedArr = this.chain.reverse();
    this.chain = reversedArr; 
    }
    return this;
  },

  finishChain() {
    const output = this.chain.join('');
    this.chain = [];
    console.log(output);
    return output;
  }
};

module.exports = {
  chainMaker
};
