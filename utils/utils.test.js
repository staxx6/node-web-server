const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            let res = utils.add(33, 11);
            
            expect(res).toBe(44).toBeA('number'); // not to be number 44 IS a number
        });
    })

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    it('should square a number', () => {
        let res = utils.square(5);

        expect(res).toBe(25).toBeA('number');
    });

    it('should async square a number', (done) => {
        utils.asyncsSquare(2, (multi) => {
            expect(multi).toBe(4).toBeA('number');
            done();
        });
    });
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'lel'}).toNotEqual({name: 'lel2'});
//     // expect([2,3,4]).toInclude(4);
//     expect({
//         name: 'lel',
//         age: 25,
//         location: 'ger'
//     }).toExclude({
//         age: 26
//     })
// });

it('should verify frist and last names are set', () => {
    let user = {location: 'ger', age: 25};
    let res = utils.setName(user,'lel kek');

    expect(user).toInclude({
        firstName: 'lel',
        lastName: 'kek'
    });
})
