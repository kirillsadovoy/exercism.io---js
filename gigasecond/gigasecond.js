'use strict';
class Gigasecond {
  constructor(date) {
    this.birthdate = date;
  }

  date() {
    return new Date(+this.birthdate + 10e11);
  }
}

module.exports = Gigasecond;
