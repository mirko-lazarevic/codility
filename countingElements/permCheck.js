function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var n = A.length;

    if (n === 0) {
        return 0
    }

    var tempArray = [0];

    if (n === 1 && A[0] !== 1) {
        return 0;
    }

    var i = 0;

    for (; i < n; i++) {
        if (!tempArray[A[i]]) {
            tempArray[A[i]] = 0;
        }
        tempArray[A[i]] += 1;
    }

    var j = 0;
    var result = 1;
    for (; j < tempArray.length; j++) {
        if (tempArray[j] > 1 || (typeof tempArray[j] === 'undefined')) {
            result = 0;
            break;
        }
    }
    return result;
}
