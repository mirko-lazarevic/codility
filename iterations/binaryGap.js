/**
 * Created by mirko on 3.10.16..
 */

var util = require('../util');

function solution(n) {
    if (typeof n !== 'number' || n < 0) {
        throw new Error('BinaryGap function requires positive integer as an argument');
    }
    var binaryString = util.convertToBinary(n);

    if (binaryString.length < 3) {
        return 0;
    }

    var i = 0;
    var maxGap = 0;
    var tempGap = 0;
    var isGapStarted = false;
    // 10001001001011100100
    for (; i < binaryString.length; i++) {
        if (!isGapStarted && binaryString[i] === '1') {
            isGapStarted = true;
        }

        if (isGapStarted && binaryString[i] === '0') {
            tempGap += 1;
        }

        if (isGapStarted && binaryString[i] === '0' && binaryString[i + 1] === '1') {
            isGapStarted = false;
            if (maxGap < tempGap) {
                maxGap = tempGap;
            }
            tempGap = 0;
        }
    }
    return maxGap;

}


module.exports = solution;
