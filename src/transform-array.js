const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error
  }
  const DELETE_NEXT = '--discard-next'
const DELETE_PREV = '--discard-prev' 
const DOUBLE_NEXT = '--double-next'
const DOUBLE_PREV = '--double-prev'

const result = [...arr]
result.forEach((item, index) => {
  if (item === DELETE_NEXT) {
    if (index + 1 === result.length) {
      result.splice(index, 1)
    } else {
      result.splice(index, 2)
    }
  } else if (item === DELETE_PREV) {
    if (index === 0) {
      result.splice(index, 1)
    } else {
      result.splice(index - 1, 2)
    }
  } else if (item === DOUBLE_NEXT) {
    if (index + 1 === result.length) {
      result.splice(index, 1)
    } else {
      result.splice(index, 1, result[index + 1])
    }
  } else if (item === DOUBLE_PREV) {
    if (index === 0) {
      result.splice(index, 1)
    } else {
      result.splice(index, 1, result[index - 1])
    }
  }
})
return result
};
