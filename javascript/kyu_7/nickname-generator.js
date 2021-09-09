/*
* https://www.codewars.com/kata/593b1909e68ff627c9000186/train/javascript
*/

const nicknameGenerator = (name) => {
    if (name.length < 4) {
        return 'Error: Name too short'
    }

    const vowels = 'aeiou'

    if (vowels.indexOf(name[2]) === -1) {
        return name.substring(0, 3)
    }
    return name.substring(0, 4)
}
