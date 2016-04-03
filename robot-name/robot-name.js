'use strict';

class Robot {
  constructor() {
    this.name = this.getUniqueRandomName();
  }

  _random(max) {
    return Math.floor(Math.random() * max);
  }

  _getRandomLetters(len) {
    let result = '';

    for (let i = 0; i < len; i++) {
      result += this.alphabet.charAt(this._random(this.alphabet.length));
    }
    return result;
  }

  _getRandomNumber(len) {
    return this._random(0xb000000).toString().slice(0, len);
  }

  getUniqueRandomName() {
    let newName = '';

    do {
      newName = `${this._getRandomLetters(2)}${this._getRandomNumber(3)}`;
    } while (this.usedNames.has(newName));

    this.usedNames.add(newName);
    return newName;
  }

  reset() {
    this.name = this.getUniqueRandomName();
  }
}

Robot.prototype.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
Robot.prototype.usedNames = new Set();

module.exports = Robot;
