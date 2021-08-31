/*
* https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
*/

const XO = (str) => str
    .toLowerCase()
    .split('')
    .reduce((acc, cur) => cur === 'x' ? acc + 1 : cur === 'o' ? acc - 1 : acc, 0) === 0

