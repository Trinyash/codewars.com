/*
* https://www.codewars.com/kata/54edbc7200b811e956000556/javascript
*/

const countSheeps = (arrayOfSheep) => arrayOfSheep.reduce((acc, cur) => cur ? acc + 1 : acc, 0)
