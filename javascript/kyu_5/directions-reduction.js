/*
* https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
*/

const dirReduc = (arr) => {
    const opposition = {'NORTH': 'SOUTH', 'SOUTH': 'NORTH', 'EAST': 'WEST', 'WEST': 'EAST'}
    let i = 0
    while (arr.length !== 0) {
        if (i >= arr.length - 1) {
            break
        }
        if (opposition[arr[i]] === arr[i + 1]) {
            arr.splice(i, 1)
            arr.splice(i, 1)
            if (i) {
                i -= 1
            }
            continue
        }
        i += 1
    }
    return arr
}
