/*
* https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
*/

const countPositivesSumNegatives = (input) => {
    if (input == null || input.length === 0) {
        return []
    }
    return [
        input.reduce((acc, cur) => cur > 0 ? acc + 1 : acc, 0),
        input.reduce((acc, cur) => cur < 0 ? acc + cur : acc, 0),
    ];
}
