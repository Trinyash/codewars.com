/*
* https://www.codewars.com/kata/56032c3deea6ebca2900003c/train/javascript
*/

const uncurry = (f) => {
    return (...args) => {
        while (f instanceof Function && f.length <= args.length) {
            let arg = args.splice(0, f.length);
            f = f(...arg)
        }
        return f
    }
}
