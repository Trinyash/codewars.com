/*
* https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript
*/

const litres = (time) => {
    const consumption_per_hour = 0.5

    return Math.floor(time * consumption_per_hour);
}
