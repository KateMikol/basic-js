const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
let newArr = [];
let minItem = 0;
for (let i = 0; i< arr.length; i++){
  if(arr[i] === -1){
    newArr.push(arr[i]);
  } else{
   minItem = Math.min(...arr.filter((item) => item > minItem));
  newArr.push(minItem);
  arr[arr.indexOf(minItem)] = 0;
  minItem = 0;
  }
}
return newArr;
}

module.exports = {
  sortByHeight
};
