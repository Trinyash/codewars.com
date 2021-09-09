/*
* https://www.codewars.com/kata/5574835e3e404a0bed00001b/train/javascript
*/

const getParticipants = (handshakes) => {
    let counter = 0
    let result = 1
    while (counter < handshakes) {
        counter += result
        result += 1
    }
    return result
}
