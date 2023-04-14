const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
 let newArr = str.split('');
 let result = [];
 let count = 1;
 for(let i = 0; i < newArr.length; i++){
  if (newArr[i] === newArr[i+1]){
    count++;
  } else if (count > 1){
    result.push(count, newArr[i]);
    count = 1;
  } else {
    result.push(newArr[i]);
  }
 }
return result.join('');
}

module.exports = {
  encodeLine
};
