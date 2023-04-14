const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newArr = String(n).split('');
  for(let i = 0; i < newArr.length-1; i++ ){
    if (newArr[i] < newArr[i+1]){
    newArr.splice(i, 1);
    return Number(newArr.join(''));
    }

  }
  return Math.trunc(Number(newArr.join(''))/10);
}

module.exports = {
  deleteDigit
};
