/*
* https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
*/

const pigIt = (str) => str
    .split(' ')
    .map((word) => /^[a-zA-Z]+$/.test(word) ? word.substr(1) + word[0] + 'ay': word)
    .join(' ')
