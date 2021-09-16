/*
* https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
*/

// be happy don't worry
const formatDuration = (seconds) => seconds === 0 ? 'now' : [60 * 60 * 24 * 365, 60 * 60 * 24, 60 * 60, 60, 1].map((i) => { let q = Math.floor(seconds / i); if (Math.floor(seconds / i) !== 0) seconds = seconds % i; return q; }).reduce((p, c, i,) => c === 0 ? `${p}` : c !== 1 ? `${p}${c} ${(i === 0 ? 'year' : i === 1 ? 'day' : i === 2 ? 'hour' : i === 3 ? 'minute' : i === 4 ? 'second' : '???')}s#` : `${p}${c} ${(i === 0 ? 'year' : i === 1 ? 'day' : i === 2 ? 'hour' : i === 3 ? 'minute' : i === 4 ? 'second' : '???')}#`, '').split('#').slice(0, -1).reduce((p, c, i, a) => i !== a.length - 1 ? `${p}, ${c}` : `${p} and ${c}`)
