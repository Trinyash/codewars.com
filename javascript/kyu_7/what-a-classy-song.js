/*
* https://www.codewars.com/kata/6089c7992df556001253ba7d/train/javascript
*/

class Song {
    constructor(title, artist) {
        this.title = title
        this.artist = artist
        this.__listeners = new Set()
    }

    howMany(persons) {
        let counter = 0
        for (const person of persons) {
            if (!this.__listeners.has(person.toLowerCase())) {
                counter += 1
            }
            this.__listeners.add(person.toLowerCase())
        }
        return counter
    }
}
