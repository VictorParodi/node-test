const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    describe('#Add', () => {
        it('Should add two numbers', () => {
            let res = utils.add(5, 3);
            expect(res).toBe(8).toBeA('number');
        });
    });

    describe('#Add asynchronously', () => {
        it('Should add two numbers asynchronously', (done) => {
            utils.addAsync(5, 9, (sum) => {
                expect(sum).toBe(14).toBeA('number');
                done();
            });
        });
    });
    
    describe('#square', () => {
        it('Should square a number', () => {
            let res = utils.square(5);
            expect(res).toBe(25).toBeA('number');
        });
    });

    describe('#Add asynchronously', () => {
        it('Should square a number asynchronously', (done) => {
            utils.sqrtAsync(5, (numSq) => {
                expect(numSq).toBe(25).toBeA('number');
                done();
            });
        });
    });
});