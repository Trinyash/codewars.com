/*
* https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/javascript
*/

const unluckyDays = (year) => {
    let numberOfBlackFridays = 0
    const startDate = new Date(`01 Jan ${year} 00:00:00 GMT`)
    const endDate = new Date(`31 Dec ${year} 00:00:00 GMT`)
    for (const day = startDate; day <= endDate; day.setDate(day.getDate() + 1)) {
        if (day.getDate() === 13 &&
            day.toLocaleString('en-us', {weekday: 'long'}) === 'Friday') {
            numberOfBlackFridays += 1
        }
    }
    return numberOfBlackFridays
}
