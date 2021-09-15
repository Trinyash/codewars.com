/*
* https://www.codewars.com/kata/5631ac5139795b281d00007d/train/javascript
*/

class WordDictionary {
    constructor() {
        this.dictionary = new Set()
    }

    addWord(word) {
        this.dictionary.add(word)
    }

    search(word) {
        let pattern = new RegExp(word.split('.').join('[a-z]'))
        for (let currentWord of this.dictionary.keys()) {
            if (currentWord.length === word.length && currentWord.match(pattern)){
                return true
            }
        }
        return false
    }
}
