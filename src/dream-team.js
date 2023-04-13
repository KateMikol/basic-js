const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!members?.length){
    return false;
  }
  let sortedArr = members.filter((item) => typeof(item) === 'string').map((item) => item.trim().toUpperCase()).sort();
  let result = [];
  for (let i = 0; i< sortedArr.length; i++){
    result.push(sortedArr[i][0]);
  }
  return result.join('');
}


module.exports = {
  createDreamTeam
};

