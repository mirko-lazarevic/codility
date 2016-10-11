/**
 * Created by mirko on 11.10.16..
 */

function solution(X, A) {
    var n = A.length;

    if (X > n) {
        return -1;
    }
    var i = 0;
    var B = new Array(X);
    

    var count = 0;
    for (; i < n; i++) {
        var position = A[i];
        if (typeof B[position - 1] === 'undefined') {
            B[position - 1] = 0;
        }
        if (B[position - 1] === 0) {
            B[position - 1] = 1;
            count++;
        }
        if (count == B.length) {
            return i;
        }
    }

    return -1;


}
