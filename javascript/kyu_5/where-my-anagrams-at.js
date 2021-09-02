/*
* https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
*/

const anagrams = (word, words) => words.filter(words => words.split('').sort().join('') === word.split('').sort().join(''))
