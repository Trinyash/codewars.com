/*
* https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
*/

const findOutlier = (integers) => {
    const isEven = (i) => i % 2 === 0

    let parity = isEven(integers[0]);
    if (parity === isEven(integers[1])) {
        return integers.find((i) => isEven(i) !== parity);
    } else {
        return parity === isEven(integers[2]) ? integers[1] : integers[0];
    }
}
