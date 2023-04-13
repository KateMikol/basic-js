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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)){
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
const newArr=[];
for (let i = 0; i < arr.length; i++){
  if(i === 0 && (arr[0] === '--discard-prev' || arr[0] === '--double-prev')){
    continue;
  } else if ( i === arr.length-1 && (arr[arr.length-1] === '--discard-next' || arr[arr.length-1] === '--double-next' ) ){
    continue;
  }else  if (arr[i] === '--discard-next'){
    i++;
  } else if(arr[i] === '--discard-prev' && arr[i-2] != '--discard-next'){
    newArr.splice(newArr.length - 1, 1);
  } else if (arr[i] === '--double-next'){
    newArr.push(arr[i+1])
  }else if(arr[i] === '--double-prev' && arr[i-2] != '--discard-next'){
    newArr.push(arr[i-1]) 
  } else if (arr[i] != '--discard-prev' && arr[i] != '--discard-next' &&  arr[i] != '--double-next' && arr[i] != '--double-prev'){
    newArr.push(arr[i]);
  }
}
return newArr;

}

module.exports = {
  transform
};
