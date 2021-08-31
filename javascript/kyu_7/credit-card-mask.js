/*
* https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
*/

const maskify =( cc)=> {
    const n = 4

    if (cc.length <= n) {
        return cc
    }
    return '#'.repeat(cc.length - n) + cc.slice(cc.length - n)
}
