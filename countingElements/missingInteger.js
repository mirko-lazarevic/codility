function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var n = A.length;

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        if (A[0] !== 1) {
            return 1;
        }
    }


    var i = 0;
    var temp = [0];
    for (; i < n; i++) {
        if (A[i] > 0) {
            temp[A[i]] = A[i];
        }
    }
    var j = 0;
    var result = 1;
    for (; j <= temp.length; j++) {
        if (typeof temp[j] === 'undefined') {
            result = j;
            break;
        }
        if (j == temp.length) {
            result = temp[temp.length] + 1;
        }
    }

    return result;
}
