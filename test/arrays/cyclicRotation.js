/**
 * Created by mirko on 4.10.16..
 */

var cyclicRotation = require('../../arrays/cyclicRotation');
var should = require('chai').should();

var testData1 = [3, 8, 9, 7, 6];

describe('Cyclic rotation', function () {
    it('it should rotate array K times', function () {
        var expected = [9, 7, 6, 3, 8];
        var numberOfRotations = 3;
        expected.should.be.deep.equal(cyclicRotation(testData1, numberOfRotations))
    })
});
