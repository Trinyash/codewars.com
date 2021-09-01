/*
* https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
*/

const digital_root = (n) => {
    if (n < 10) {
        return n
    }
    return digital_root(n.toString().split('').map(Number).reduce((acc, cur) => acc + cur, 0))
}
