//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

const HelloWorld = function hello() {};

HelloWorld.prototype.hello = function hello(input) {
  if (typeof input === 'undefined' || input === '') {
    return 'Hello, World!';
  }

  return `Hello, ${input}`;
};

module.exports = HelloWorld;
