const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
 for (let i = 0; i < domains.length; i++){
   let domainArr = domains[i].split('.').reverse().map((item) => '.'+item);
  
   for (let j = 1; j < domainArr.length ; j++){
    domainArr[j] = domainArr[j-1] + domainArr[j];
   }

   for (let k = 0; k < domainArr.length; k++){
    
    !!obj[domainArr[k]] ? obj[domainArr[k]] += 1 : obj[domainArr[k]] =1;
   }
 }
return obj;
}

module.exports = {
  getDNSStats
};
