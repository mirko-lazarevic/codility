/**
 * Created by mirko on 3.10.16..
 */

var util = require('../util');
var should = require('chai').should();

describe('Util', function () {
    describe('decimal to binary converter', function(){
        it('it should convert decimal number to binary', function(){
            var expected1 = '1001';
            expected1.should.be.equal(util.convertToBinary(9));

            var expected2 = '10000010001';
            expected2.should.be.equal(util.convertToBinary(1041));
        })
    })
});