const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('Server', () => {
    describe('#root endpoint', () => {
        it('Should return Hello World! response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    });
                })
                .end(done);
        });
    });

    describe('#users endpoint', () => {
        it('Should return an user with name Kate', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Kate',
                        age: 22
                    });
                })
                .end(done);
        });
    });
});


