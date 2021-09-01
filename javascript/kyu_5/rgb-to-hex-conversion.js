/*
* https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
*/

const rgb = (r, g, b) => [
    (r < 0 ? 0 : r > 255 ? 255 : r).toString(16).padStart(2, '0').toUpperCase(),
    (g < 0 ? 0 : g > 255 ? 255 : g).toString(16).padStart(2, '0').toUpperCase(),
    (b < 0 ? 0 : b > 255 ? 255 : b).toString(16).padStart(2, '0').toUpperCase(),
].join('')
