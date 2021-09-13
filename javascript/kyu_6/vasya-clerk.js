/*
* https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript
*/

const tail = (arr) => arr.slice(1)

const tickets = (peopleInLine) => {
    const ticketCost = 25
    if (peopleInLine[0] !== ticketCost) {
        return 'NO'
    }
    const wallet = {
        25: 1,
        50: 0,
        100: 0,
    }

    for (const cash of tail(peopleInLine)) {
        if (cash === ticketCost) {
            wallet[ticketCost] += 1
        }

        if (cash === 50) {
            if (wallet[25] === 0) {
                return 'NO'
            } else {
                wallet[50] += 1
                wallet[25] -= 1
            }
        }

        if (cash === 100) {
            if (wallet[25] === 0 || wallet[50] === 0 && wallet[25] <= 2) {
                return 'NO'
            } else if (wallet[50] === 0) {
                wallet[25] -= 3
            } else {
                wallet[50] -= 1
                wallet[25] -= 1
            }
        }
    }

    return 'YES'
}
