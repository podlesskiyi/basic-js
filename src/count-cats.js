const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
 let cats = 0
 arr.forEach(el => {
   el.forEach(item => {
     if (item === '^^') {
       cats += 1
     }
   })
 })
 return cats
};
