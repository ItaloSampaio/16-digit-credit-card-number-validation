const expect = require('chai').expect;
const creditCardChecker = require('../creditCardValidation');

describe('creditCardValidation', () => {
    
    describe('#isValidNumber', () => {

        it('should return false whether the number is not valid', () => {
            
            expect(
                creditCardChecker.isValidNumber(4012888888881882)
            ).to.be.false;
        });

        it('should return true whether the number is valid', () => {
            
            expect(
                creditCardChecker.isValidNumber(4012888888881881)
            ).to.be.true;
        });

        it('should return false whether the number length is greather than 16', () => {
            
            expect(
                creditCardChecker.isValidNumber(40128888888818825)
            ).to.be.false;
        });

        it('should return false whether the number length is less than 16', () => {
            
            expect(
                creditCardChecker.isValidNumber(1313)
            ).to.be.false;
        });

        it('should throw an error whether the param is not a Number', () => {
            
            expect(
                creditCardChecker.isValidNumber.bind(
                    creditCardChecker, 'param'
                )
            ).to.throw(Error);
        });

        it('should throw an error whether the param is not defined', () => {

            expect(
                creditCardChecker.isValidNumber.bind(creditCardChecker)
            ).to.throw(Error);
        });
    });
});