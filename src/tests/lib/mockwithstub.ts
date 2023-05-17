import { expect } from 'chai';

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

        expect(result).to.equal('Mocked value');

        myFunction = originalFunction;
    });
});
