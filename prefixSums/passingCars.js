/**
 * Created by mirko on 12.10.16..
 */
function solution(A) {
    var ones = 0, result = 0;
    for (var i = A.length - 1; i >= 0; i--) {
        if (A[i] === 0) {
            result += ones;
            if (result > 1000000000) {
                return -1;
            }
        } else {
            ones++;
        }
    }
    return result;
}

// solution([0, 1, 0, 1, 1]);

module.export = solution;