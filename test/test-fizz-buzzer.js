// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const
function (num) = require('../function(num)');

// unit tests for our `adder` function
describe('function(num)', function () {

    // test the normal case
    it('should return zero for the remainder of that number divided by 15', function () {
        // range of normal inputs, including
        // notable cases like negative answers
        const normalCases = [
            {
                num: 30,
                expected: 'fizz-buzz'
            },
            {
                num: 15,
                expected: 'fizz-buzz'
            },
            {
                num: -15,
                expected: 'fizz-buzz'
            }
            {
                num: 5,
                expected: 'buzz'
            },
            {
                num: 3,
                expected: 'fizz'
            }
        ];
        // for each input (num), `function(num)` should
        // produce the expected value
        normalCases.forEach(function (input) {
            const answer = 'function(num)' (input.num);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise error if args not numbers', function () {
        // range of bad inputs where not both are numbers
        const badInputs = [
            ['a', 1],
            ['1', 2],
            [2, false]
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function (input) {
            expect(function () {
                function (num)(input[0], input[1]);
            }).to.throw(Error);
        });
    });
});
