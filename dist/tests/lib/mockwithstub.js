"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
let myFunction = () => {
    console.log('====================================');
    console.log('Normal Function!!');
    console.log('====================================');
};
describe('mock', () => {
    it('should mock a function', () => {
        const originalFunction = myFunction;
        myFunction = () => 'Mocked value';
        const result = myFunction();
        (0, chai_1.expect)(result).to.equal('Mocked value');
        myFunction = originalFunction;
    });
});
