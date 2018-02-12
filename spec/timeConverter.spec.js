const expect = require('chai').expect;
const timeConverter = require('../timeConverter');

describe.only('timeconverter', function () {
    it('converts time strings like 00:XX into 12.XXam', function () {
        expect(timeConverter('00:23')).to.equal('12:23am');
    });
    it('converts time between 00 and 12 (exclusive) to am time', function () {
        expect(timeConverter('03:44')).to.equal('03:44am');
        expect(timeConverter('11:59')).to.equal('11:59am');
    });
    it('converts time between 12 and 24 (exclusive) to pm time', function () {
        expect(timeConverter('12:00')).to.equal('12:00pm');
        expect(timeConverter('23:59')).to.equal('11:59pm');
    });
})