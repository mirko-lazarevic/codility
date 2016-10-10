function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var N = A.length;
    var sum = ((N + 1) * (N + 2)) / 2;  
    var i = 0;
    for (; i < N; i++) {
        sum -= A[i];
    }
    
    return sum;
}
