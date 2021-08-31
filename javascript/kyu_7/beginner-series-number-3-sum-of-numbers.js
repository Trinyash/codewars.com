/*
* https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
*/

const getSum = (a, b) => {
    let result = 0;

    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        result += i
    }

    return result
}
