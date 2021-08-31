/*
* https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
*/

const DNAStrand = (dna) => dna
    .split('')
    .map((x) => {
        return {
            'A': 'T',
            'T': 'A',
            'G': 'C',
            'C': 'G',
        }[x]
    })
    .join('')
