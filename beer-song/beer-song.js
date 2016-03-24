'use strict';
class BeerSong {
  verse(bottles) {
    let i = bottles;

    function bottllesCount(j) {
      let str = `${j} bottles`;

      if (j === 1) {
        str = '1 bottle';
      } else if (j === 0) {
        str = 'no more bottles';
      }

      return str;
    }

    let firstString = `${bottllesCount(i)} of beer on the wall, ${bottllesCount(i)} of beer.`;
    let secondString = `Take one down and pass it around, ${bottllesCount(--i)} of beer on the wall.`;

    if (bottles === 1) {
      secondString = `Take it down and pass it around, ${bottllesCount(i)} of beer on the wall.`;
    }

    if (bottles === 0) {
      secondString = 'Go to the store and buy some more, 99 bottles of beer on the wall.';
    }

    firstString = firstString[0].toUpperCase() + firstString.slice(1);

    return `${firstString}\n${secondString}\n`;
  }

  sing(from, stop) {
    let song = '';
    const to = stop || 0;

    for (let i = from; i >= to; i--) {
      song += this.verse(i);

      if (i !== to) {
        song += '\n';
      }
    }

    return song;
  }

}

module.exports = BeerSong;
