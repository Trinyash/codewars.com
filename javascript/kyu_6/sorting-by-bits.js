/*
* https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript
*/

const sortByBit = (arr) => arr
    .sort((a, b) => {
        const numberOfBitsInA = Number(a).toString(2).split('').reduce((acc, cur) => cur === '1' ? acc + 1 : acc, 0)
        const numberOfBitsInB = Number(b).toString(2).split('').reduce((acc, cur) => cur === '1' ? acc + 1 : acc, 0)
        return numberOfBitsInA === numberOfBitsInB ? a - b : numberOfBitsInA - numberOfBitsInB;
    })
