const {add} = require('..');
describe('addition', () => {
    test('shoud sum two numbers', () => {
        const sum = add(1, 2);
        expect(sum).toBe(3);
    })
    
    test('summing non numbers throw error', () => {
        expect(() => add(1, '2')).toThrow();
    })
})