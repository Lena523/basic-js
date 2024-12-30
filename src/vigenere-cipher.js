const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(invert){
    if(typeof invert === 'undefined'){
      this.invert = true;
    }
    else{
      this.invert = invert;
    }  
    this.abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.arr = [];
    this.keyArr = [];
    this.cipherArr = [];
    this.meaningsArr = [];
    this.codedPhrase = [];
    this.finalCodedPhrase = [];
    this.formattedArr = '';
    this.formattedString = '';
  }
  encrypt(string, key) {
    if(Boolean(string) === false || Boolean(key) === false){
      throw new Error('Incorrect arguments!');
    }

    this.formattedArr = string.match(/[a-zA-Z]/g);
    if(this.formattedArr.length !== 0){
      this.formattedString = this.formattedArr.join('').toUpperCase();
    }

    for(let i = 0; i < key.length; i += 1){
      for(let j = 0; j < this.abc.length; j += 1){
        if(key[i].toUpperCase() === this.abc[j]){
          this.keyArr.push(j);
          break;
        }
      }
    }
  
    for(let i = 0; i < this.formattedString.length; i+= 1){
      for(let j = 0; j < this.abc.length; j += 1){
        if(this.formattedString[i] === this.abc[j]){
          this.arr.push(j);
          break;
        }
      }
    }

    for(let i = 0, j = 0; i < this.formattedString.length; i += 1, j += 1){
      if(j === this.keyArr.length){
        j = 0;
      }
      this.cipherArr.push(this.keyArr[j]);
    }
    
    for(let i = 0; i < this.arr.length; i += 1){
      if(this.arr[i] + this.cipherArr[i] > this.abc.length - 1){
        this.meaningsArr.push(this.arr[i] + this.cipherArr[i] - this.abc.length);
      }
      else{
        this.meaningsArr.push(this.cipherArr[i] + this.arr[i]);
      }
    }

    for(let i = 0; i < this.meaningsArr.length; i += 1){
      for(let j = 0; j < this.abc.length; j += 1){
        if(this.meaningsArr[i] === j){
          this.codedPhrase.push(this.abc[j]);
          break;
        }
      }
    }
    for (let i = 0, j = 0; i < string.length; i += 1){
       if(!string[i].match(/[a-zA-Z]/g)){
        this.finalCodedPhrase.push(string[i]);
       }
       else{
        this.finalCodedPhrase.push(this.codedPhrase[j]);
        j += 1;
       }
    }
    let cipherPhrase = '';
    if(Boolean(this.invert) === false){
      if(this.finalCodedPhrase.length !== 0){
        cipherPhrase = this.finalCodedPhrase.reverse().join('');
      }
    }
    if(this.finalCodedPhrase.length !== 0){
      cipherPhrase = this.finalCodedPhrase.join('');
    }
    this.arr = [];
    this.keyArr = [];
    this.cipherArr = [];
    this.meaningsArr = [];
    this.codedPhrase = [];
    this.finalCodedPhrase = [];
    this.formattedArr = '';
    this.formattedString = '';
    return cipherPhrase;   
  }

  decrypt(string, key) {
    if(Boolean(string) === false || Boolean(key) === false){
      throw new Error('Incorrect arguments!');
    }
    this.formattedArr = string.match(/[a-zA-Z]/g);
    if(this.formattedArr.length !== 0){
      this.formattedString = this.formattedArr.join('');
    }

    for(let i = 0; i < this.formattedString.length; i += 1){
       for(let j =0; j < this.abc.length; j += 1){
        if(this.formattedString[i] === this.abc[j]){
          this.arr.push(j);
          break;
        }
       }
    }

    for(let i = 0; i < key.length; i += 1){
      for(let j = 0; j < this.abc.length; j += 1){
        if(key[i].toUpperCase() === this.abc[j]){
          this.keyArr.push(j);
           break;
        }
      }
    }  
    
    for(let i = 0, j = 0; i < this.formattedString.length; i += 1, j += 1){
      if(j === this.keyArr.length){
        j = 0;
      }
      this.cipherArr.push(this.keyArr[j]);
    }

     for(let i = 0; i < this.arr.length; i += 1){
       if(this.arr[i] - this.cipherArr[i] < 0){
        this.meaningsArr.push(this.arr[i] - this.cipherArr[i] + this.abc.length);
       }
       else{
        this.meaningsArr.push(this.arr[i] - this.cipherArr[i]);
       }
     }
      
     for(let i = 0; i < this.meaningsArr.length; i += 1){
       for(let j = 0; j < this.abc.length; j += 1){
        if(this.meaningsArr[i] === j){
          this.codedPhrase.push(this.abc[j]);
          break;
        }
       }
     }

     for (let i = 0, j = 0; i < string.length; i += 1){
      if(!string[i].match(/[a-zA-Z]/g)){
        this.finalCodedPhrase.push(string[i]);
       }
       else{
        this.finalCodedPhrase.push(this.codedPhrase[j]);
        j += 1;
       }
     }
     let cipherPhrase = '';
     if(Boolean(this.invert) === false){
      if(this.finalCodedPhrase.length !== 0){
        cipherPhrase =  this.finalCodedPhrase.reverse().join('');
      }
    }
    if(this.finalCodedPhrase.length !== 0){
       cipherPhrase = this.finalCodedPhrase.join('');
    }
    this.arr = [];
    this.keyArr = [];
    this.cipherArr = [];
    this.meaningsArr = [];
    this.codedPhrase = [];
    this.finalCodedPhrase = [];
    this.formattedArr = '';
    this.formattedString = '';
    return cipherPhrase;
  }
}

module.exports = {
  VigenereCipheringMachine
};
