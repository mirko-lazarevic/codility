/**
 * Created by mirko on 3.10.16..
 */

var binaryGap = require('../../iterations/binaryGap');
var should = require('chai').should();

describe('Binary Gap', function () {
    it('it should have tests', function () {
        true.should.equal(true);
    });

    it('it should accept only positive integers', function () {
        (function () {
            binaryGap(-5);
        }).should.throw(Error)
    });

    it('it should return maximal sequence of consecutive zeros that is surrounded by ones at both ends', function(){
        var expected = 5;
        expected.should.be.equal(binaryGap(1041));

        expected = 2;
        expected.should.be.equal(binaryGap(9));

        expected = 1;
        expected.should.be.equal(binaryGap(20));

        expected = 0;
        expected.should.be.equal(binaryGap(2147483647));

        expected = 3;
        expected.should.be.equal(binaryGap(561892));
    })

});
