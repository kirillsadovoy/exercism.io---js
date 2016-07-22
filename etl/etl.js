'use strict';

class ETL {

  transform(data) {
    const result = {};

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        data[key].forEach(item => {
          result[item.toLowerCase()] = Number(key);
        });
      }
    }

    return result;
  }

}

module.exports = ETL;
