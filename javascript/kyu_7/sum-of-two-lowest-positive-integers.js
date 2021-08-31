/*
* https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
*/

const sumTwoSmallestNumbers = (numbers) => numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, cur) => acc + cur, 0)
