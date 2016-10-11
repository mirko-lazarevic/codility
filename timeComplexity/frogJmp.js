function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 6.4.0)
    if ((Y - X) % D === 0) {
        return (Y - X) / D;
    } else {
        return Math.ceil((Y - X) / D);
    }
}
