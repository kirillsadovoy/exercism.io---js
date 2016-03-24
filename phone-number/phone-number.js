'use strict';
class PhoneNumber {
  constructor(number) {
    this.phone = number.replace(/\D/g, '');
  }
  number() {
    const phoneLength = this.phone.length;

    if (phoneLength === 10) {
      return this.phone;
    }

    if (phoneLength === 11 && this.phone[0] === '1') {
      return this.phone.slice(1);
    }

    return '0'.repeat(10);
  }
  areaCode() {
    return this.phone.slice(0, 3);
  }
  toString() {
    const code = this.areaCode();
    const firstChunk = this.phone.slice(3, 6);
    const secondChunk = this.phone.slice(-4);

    return `(${code}) ${firstChunk}-${secondChunk}`;
  }
}

module.exports = PhoneNumber;
