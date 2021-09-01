/*
* https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
*/

const persistence = (num) => {
    let result = 0
    while (num > 9) {
        let mul = 1
        for (const x of num.toString().split('').map(Number)) {
            mul *= x
        }
        num = mul
        result += 1
    }
    return result
}
