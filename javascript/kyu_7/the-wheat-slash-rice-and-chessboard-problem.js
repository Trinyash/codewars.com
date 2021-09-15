/*
* https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7/train/javascript
*/

const squaresNeeded = (grains) => {
    if (grains === 0) {
        return 0
    }

    let result;
    for (result = 1; grains / 2 >= 1; grains = grains / 2) {
        result++
    }
    return result
}
