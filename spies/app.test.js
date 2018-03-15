const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('yay', 25);
        expect(spy).toHaveBeenCalledWith('yay', 25);
    });

    it('sould call saveUser with user object', () => {
        let email = 'ex@ex.ex';
        let password = '123';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});
