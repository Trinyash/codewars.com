/*
* https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
*/

const nbYear = (p0, percent, aug, p) => {
    let y = 0

    for (y; p0 < p; y++) {
        p0 += ((p0 * (percent / 100)) + aug)
    }

    return y
}
