/*
* https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
*/

// be happy don't worry
const formatDuration = (seconds) => seconds === 0 ? 'now' : [60 * 60 * 24 * 365, 60 * 60 * 24, 60 * 60, 60, 1].reduce((p, c) => p.concat([[Math.floor(p[p.length - 1][0] / c) !== 0 ? p[p.length - 1][0] % c : p[p.length - 1][0], c, Math.floor(p[p.length - 1][0] / c)]]), [[seconds, NaN, NaN]]).slice(1).map(([, , x]) => x).reduce((p, c, i,) => c === 0 ? `${p}` : ((s) => c === 1 ? `${s}#` : `${s}s#`)(i === 0 ? `${p}${c} ${'year'}` : i === 1 ? `${p}${c} ${'day'}` : i === 2 ? `${p}${c} ${'hour'}` : i === 3 ? `${p}${c} ${'minute'}` : i === 4 ? `${p}${c} ${'second'}` : `${p}${c} ${'???'}`), '').split('#').slice(0, -1).reduce((p, c, i, a) => i !== a.length - 1 ? `${p}, ${c}` : `${p} and ${c}`)
