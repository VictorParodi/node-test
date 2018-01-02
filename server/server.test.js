const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

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


