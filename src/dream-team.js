const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 
  if(!Array.isArray(members)){
    return false;}
    let arr = members.filter(el => typeof el === 'string')
    arr = arr.map(e => e.trim().charAt(0).toUpperCase());
    return arr.sort().join('')
};
