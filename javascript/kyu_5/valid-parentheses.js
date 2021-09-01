/*
* https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
*/

const validParentheses = (parens) => {
    let counter = 0
    for (const char of parens.split('')) {
        if (counter <= -1 )
        {
            break
        }
        if (char === ')') {
            counter -= 1
        }
        if (char === '(') {
            counter += 1
        }
    }
    return counter === 0
}
