/*
* https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript
*/

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)
