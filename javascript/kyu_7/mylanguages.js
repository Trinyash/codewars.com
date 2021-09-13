/*
* https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript
*/

const myLanguages = (results) => Object.entries(results)
    .filter(([, value]) => value >= 60)
    .sort(([, a], [, b]) => a - b)
    .map(([key,]) => key)
    .reverse()
