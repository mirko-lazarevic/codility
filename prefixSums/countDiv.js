/**
 * Created by mirko on 13.10.16..
 */
function solution(A, B, K) {
    if (A % K === 0) {
        return Math.floor((B - A) / K + 1);
    }
    return Math.floor((B - (A - (A % K))) / K);
}

// solution(6, 11, 2);
module.exports = solution;