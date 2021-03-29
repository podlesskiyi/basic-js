const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if (toString.call(date) != "[object Date]") {
    if (date === undefined)
    return ('Unable to determine the time of year!');
    else {
      throw new Error('Error')
    }
  }
  else if(toString.call(date) === "[object Date]"){
    switch (date.getMonth()) {
      case 0 :
        return ('winter');
        break;
      case 1 :
        return ('winter');
        break;
      case 2 :
        return ('spring');
        break;
      case 3:
        return ('spring');
        break;
      case 4:
        return ('spring');
        break;
      case 5:
        return ('summer');
        break;
      case 6:
        return ('summer');
        break;
      case 7:
        return ('summer');
        break;
      case 8:
        return ('autumn');
        break;
      case 9:
        return ('autumn');
        break;
      case 10:
        return ('autumn');
        break;
      case 11:
        return ('winter');
        break;
    }
  }
};