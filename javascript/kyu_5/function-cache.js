/*
* https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript
*/

const cache = (f) => {
    const map = new Map()
    return (...args) => {
        const data = JSON.stringify(args)
        if (!map.has(data)) {
            map.set(data, f(...args))
        }
        return map.get(data)
    }
}
