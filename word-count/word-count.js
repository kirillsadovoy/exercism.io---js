'use strict';
class Words {
  count(str) {
    const result = {};
    const strAsArray = str.trim().split(/\s+/g);

    strAsArray.forEach(key => {
      if (result.hasOwnProperty(key)) {
        result[key] = ++result[key];
      } else {
        result[key] = 1;
      }
    });

    return result;
  }
};

module.exports = Words;
