/**
 * Created by mirko on 11.10.16..
 */

function solution(N, A) {
    var results = new Array(N);

    for (var k = 0; k < results.length; k++) {
        results[k] = 0;
    }

    var max = 0;
    var isMaxCounterBefore = false;

    for (var i = 0; i < A.length; i++) {
        var val = A[i];
        var index = val - 1;

        if (val <= N) {
            results[index]++;
            if (results[index] > max) {
                max = results[index];
            }
            isMaxCounterBefore = false;
        } else {
            if (!isMaxCounterBefore) {
                for (var j = 0; j < results.length; j++) {
                    results[j] = max;
                }
            }
            isMaxCounterBefore = true;
        }
    }

    return results;

}


// console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));

module.exports = solution;
