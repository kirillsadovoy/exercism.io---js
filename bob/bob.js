'use strict';
class Bob {
  hey(input) {
    const isQuestion = /[?]$/.test(input);
    const isSilence = /^\s*$/.test(input);
    const isYell = input.toUpperCase() === input && input.toLowerCase() !== input;

    if (isYell) {
      return 'Whoa, chill out!';
    }

    if (isQuestion) {
      return 'Sure.';
    }

    if (isSilence) {
      return 'Fine. Be that way!';
    }

    return 'Whatever.';
  }
}

module.exports = Bob;
