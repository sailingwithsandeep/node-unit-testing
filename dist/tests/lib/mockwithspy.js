"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
let myFunction = (...args) => {
    console.log('====================================');
    console.log('Normal Function!!', args);
    console.log('====================================');
};
describe('spy', () => {
    it('should mock a function using a spy', () => {
        const originalFunction = myFunction;
        const spyFunction = (...args) => {
            (0, chai_1.expect)(args).to.deep.equal([1, 2, 3]);
            // Perform any other necessary logic
            return 'Mocked value with spy';
        };
        myFunction = spyFunction;
        const result = myFunction(1, 2, 3);
        (0, chai_1.expect)(result).to.equal('Mocked value with spy');
        myFunction = originalFunction;
    });
});
