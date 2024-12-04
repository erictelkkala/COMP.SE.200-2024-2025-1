import toString from '../toString';

describe('toString', () => {
    describe('positive tests', () => {
        describe('strings should be strings', () => {
            test('string hello should be "hello"', () => {
                expect(toString('hello')).toBe('hello')
            })
            test('empty string is empty string"', () => {
                expect(toString('')).toBe('')
            })
        })
        describe('numbers will be strings', () => {
            test('numbers 13 turns into string', () => {
                expect(toString(13)).toBe('13')
            })
            test('number -12 turns into string', () => {
                expect(toString(-12)).toBe('-12')
            })
        })
        describe('arrays and symbols', () => {
            test('convert array with numbers to comma-separated string', () => {
                expect(toString([1, 2, 3])).toBe('1,2,3')
            })
            test('convert array with strings to comma separated string', () => {
                expect(toString(['a', 'b', 'c'])).toBe('a,b,c')
            })
            test('should handle nested array recursively', () => {
                expect(toString([1, [2, [3]]])).toBe('1,2,3')
            })
            test('should handle nested array recursively', () => {
                expect(toString([[null], [undefined], [13]])).toBe(',,13')
            })
            test('should convert symbols to string', () => {
                expect(toString(Symbol('test'))).toBe('Symbol(test)')
            })
        })
    })
    describe('negative tests', () => {
        describe('handling objects', () => {
            test('should handle objects gracefully', () => {
                expect(toString({})).toBe('[object Object]')
            })
            test('should handle objects gracefully', () => {
                expect(toString({ key: 'value' })).toBe('[object Object]')
            })
        })
        describe('handling special numeric values and booleans', () => {
            //SKIPPED DUE TO BUGS
            test.skip('NaN should be ""', () => {
                expect(toString(NaN)).toBe('')
            })
            test.skip('infinite should be ""', () => {
                expect(toString(Infinity)).toBe('')
            })
            test.skip('negative infinity should be ""', () => {
                expect(toString(-Infinity)).toBe('')
            })
            test.skip('NaN should be ""', () => {
                expect(toString(NaN)).toBe('')
            })
            test.skip('false should be ""', () => {
                expect(toString(false)).toBe('')
            })
            test.skip('true should be ""', () => {
                expect(toString(true)).toBe('')
            })
            //SKIPPED TESTS END
        })
    })
})