'use strict';

class FoodChain {
  verse(index) {
    const verseIndex = index - 1;
    const phrases = [];
    const animalsDict = {
      0: 'fly',
      1: 'spider',
      2: 'bird',
      3: 'cat',
      4: 'dog',
      5: 'goat',
      6: 'cow',
      7: 'horse',
    };
    const phraseDict = {
      start: animal => `I know an old lady who swallowed a ${animal}.`,
      swallow(swallowed, toCatch, uniqEnd) {
        return `She swallowed the ${swallowed} to catch the ${toCatch}${uniqEnd}.`;
      },
      last: 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
    };
    const keyPhrases = {
      1: 'It wriggled and jiggled and tickled inside her.',
      2: 'How absurd to swallow a bird!',
      3: 'Imagine that, to swallow a cat!',
      4: 'What a hog, to swallow a dog!',
      5: 'Just opened her throat and swallowed a goat!',
      6: 'I don\'t know how she swallowed a cow!',
    };

    phrases.push(phraseDict.start(animalsDict[verseIndex]));

    if (verseIndex < 7) {
      if (verseIndex in keyPhrases) {
        phrases.push(keyPhrases[verseIndex]);
      }

      if (verseIndex > 0) {
        for (let i = verseIndex; i !== 0; i--) {
          const swallowedAnimal = animalsDict[i];
          const catchAnimal = animalsDict[i - 1];
          let phraseEnd = '';

          if (swallowedAnimal === 'bird' && catchAnimal === 'spider') {
            phraseEnd = ' that wriggled and jiggled and tickled inside her';
          }

          phrases.push(phraseDict.swallow(swallowedAnimal, catchAnimal, phraseEnd));
        }
      }

      phrases.push(phraseDict.last);
    } else {
      phrases.push('She\'s dead, of course!\n');
    }

    return phrases.join('\n');
  }
  verses(from, to) {
    const verses = [];

    for (let i = from; i <= to; i++) {
      verses.push(this.verse(i));
    }

    return `${verses.join('\n')}\n`;
  }
}

module.exports = FoodChain;
