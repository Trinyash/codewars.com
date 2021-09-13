/*
* https://www.codewars.com/kata/57e5a6a67fbcc9ba900021cd/train/javascript
*/

var TreeNode = function (value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
};

const arrayToTree = (array) => {
    const result = []

    for (const x of array) {
        result.push(new TreeNode(x))
    }

    for (let i = 0; i < result.length; i++) {
        if ((i * 2 + 1) < result.length) {
            result[i].left = result[i * 2 + 1]
        }
        if ((i * 2 + 2) < result.length) {
            result[i].right = result[i * 2 + 2]
        }
    }

    return result[0]
}
