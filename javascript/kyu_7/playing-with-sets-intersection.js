/*
* https://www.codewars.com/kata/5884d46015a70f6cd7000035/javascript
*/

const inter = (s1, s2) => new Set([...s1].filter(x => s2.has(x)))
