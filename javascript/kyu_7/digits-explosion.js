/*
* https://www.codewars.com/kata/585b1fafe08bae9988000314/train/javascript
*/

const explode = (s) => s.split('').map((x) => x.repeat(Number.parseInt(x, 10))).join('')
