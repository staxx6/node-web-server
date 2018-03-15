const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('server', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'aye'
                });
            })
            .end(done);
        });
    });

    describe('GET /user', () => {
        it('should have the name yes', (done) => {
            request(app)
            .get('/user')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'yes'
                })
            })
            .end(done);
        });
    });
});
