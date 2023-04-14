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
  constructor(direct = true){
     this.type = direct;
  };
  encrypt(message, key) {
  
    if (!message || !key){
      throw new Error ('Incorrect arguments!');
    }

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let messageArr = message.toUpperCase().split('');
    let newKey = key.toUpperCase();
    let encryptedMessage='';
    let count = 0;
  
    for (let i = 0; i< messageArr.length; i++){
      if (alphabet.includes(messageArr[i])){
        let step = (key.length + i - count) % key.length;
         let newInd = (alphabet.indexOf(messageArr[i]) + alphabet.indexOf(newKey[step])) % alphabet.length;
         encryptedMessage += alphabet[newInd];
      }else{
        encryptedMessage +=messageArr[i];
        count++;
      }
    }
    if (this.type === true){
      return encryptedMessage;
    } else {
      return encryptedMessage.split('').reverse().join('');
    }
    

  }

  decrypt(encryptedMessage, key) {
    
    if (!encryptedMessage || !key){
      throw new Error ('Incorrect arguments!');
    }

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encryptedMessageArr = encryptedMessage.toUpperCase().split('');
    let newKey = key.toUpperCase();
    let message='';
    let count = 0;
  
    for (let i = 0; i< encryptedMessageArr.length; i++){
      if (alphabet.includes(encryptedMessageArr[i])){
        let step = (key.length + i - count) % key.length;
        // let delta = (alphabet.indexOf(encryptedMessageArr[i]) - alphabet.indexOf(newKey[step]));
         let newInd = alphabet.indexOf(encryptedMessageArr[i]) - alphabet.indexOf(newKey[step]) % alphabet.length;
         message += alphabet[newInd < 0 ? newInd + alphabet.length : newInd];
      }else{
        message +=encryptedMessageArr[i];
        count++;
      }
    }
    if (this.type === true){
      return message;
    } else {
      return message.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};

