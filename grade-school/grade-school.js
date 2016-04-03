'use strict';

class School {
  constructor() {
    this.db = {};
  }

  add(name, grade) {
    if (!this.db[grade]) {
      this.db[grade] = [];
    }

    this.db[grade].push(name);
  }

  grade(index) {
    return this.db[index] ? this.db[index].sort() : [];
  }

  roster() {
    const sortedRoster = {};

    for (const grade in this.db) {
      if (this.db.hasOwnProperty(grade)) {
        sortedRoster[grade] = this.db[grade].sort();
      }
    }

    return sortedRoster;
  }
}

module.exports = School;
