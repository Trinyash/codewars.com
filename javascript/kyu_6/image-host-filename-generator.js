/*
* https://www.codewars.com/kata/586a933fc66d187b6e00031a/train/javascript
*/

function generateName() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const n = 6
    const result = []
    for (let i = 0; i < n; i++) {
        const rnd_i = Math.floor(Math.random() * alphabet.length);
        result.push(alphabet.substring(rnd_i, rnd_i + 1))
    }
    return result.join('');
}
