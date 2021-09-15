/*
* https://www.codewars.com/kata/5655c60db4c2ce0c2e000026/train/javascript
*/

const compose = (...fn) => {
    return (arg) => {
        let result = arg
        for (const f of fn.reverse()) {
            result = f(result)
        }
        return result
    }
}
