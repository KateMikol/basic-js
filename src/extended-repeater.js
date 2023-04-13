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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let addSep = '|';
  if (!!options.additionSeparator){
     addSep = String(options.additionSeparator);
  }else if(options.additionSeparator == false){
     addSep = 'false';
  }
  let tailArr = new Array(!!options.additionRepeatTimes ? Number(options.additionRepeatTimes) : 1 ).fill(!!options.addition ? String(options.addition): '');
  let tail = tailArr.join(`${addSep}`);
  let newStr = new Array(!!options.repeatTimes ? Number(options.repeatTimes) : 1).fill(String(str) + tail) ;

  // console.log(Number(options.additionRepeat));
  // console.log(Number(options.repeatTimes));
  

  return newStr.join(`${!!options.separator ? String(options.separator) : '+'}`);
 

}
// console.log(String(options.additionSeparator));
// console.log(String(false).type());

module.exports = {
  repeater
};
