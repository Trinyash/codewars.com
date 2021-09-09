/*
* https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript
*/

const deepCount = (arr) => arr.reduce((acc, cur) => acc + (Array.isArray(cur) ? deepCount(cur) : 0), arr.length)
