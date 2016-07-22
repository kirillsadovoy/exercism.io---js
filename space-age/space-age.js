'use strict';

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  calcYears(daysInYear) {
    const secondsInYear = daysInYear * 24 * 60 * 60;
    return Number((this.seconds / secondsInYear).toFixed(2));
  }

  onEarth() {
    return this.calcYears(365.24);
  }

  onMercury() {
    return this.calcYears(87.97);
  }

  onVenus() {
    return this.calcYears(224.7);
  }

  onMars() {
    return this.calcYears(686.98);
  }

  onJupiter() {
    return this.calcYears(4332.82);
  }

  onSaturn() {
    return this.calcYears(10755.7);
  }

  onNeptune() {
    return this.calcYears(60190.03);
  }

  onUranus() {
    return this.calcYears(30687.15);
  }
}

module.exports = SpaceAge;
