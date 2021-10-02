/*
* https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
*/

const solution = (list) => {
    const result = []
    let tmp = [list.shift()]
    list.concat(NaN).forEach((value) => {
        if (tmp[tmp.length - 1] + 1 === value) {
            tmp.push(value)
        } else {
            result.push(tmp)
            tmp = [value]
        }
    })
    return result
        .reduce((acc, cur) => cur.length <= 2 ? acc.concat(...cur) : acc.concat(`${cur[0]}-${cur[cur.length - 1]}`), [])
        .join(',')
}