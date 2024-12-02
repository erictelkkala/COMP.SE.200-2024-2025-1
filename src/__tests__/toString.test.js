import toString from '../toString';

describe('toString', () => {
    describe('positive tests', () => {
        test('should return string as a string', () => {
            expect(toString('hello')).toBe('hello')
            expect(toString('')).toBe('')
        })
        test('should convert numbers to string', () => {
            expect(toString(13)).toBe('13')
            expect(toString(-12)).toBe('-12')
        })
        test('should convert arrays to comma-separated strings', () => {
            expect(toString([1, 2, 3])).toBe('1,2,3')
            expect(toString(['a', 'b', 'c'])).toBe('a,b,c')
        })
        test('should handle nested arrays recursively', () => {
            expect(toString([1, [2, [3]]])).toBe('1,2,3')
            expect(toString([[null], [undefined], [13]])).toBe(',,13')
        })
        test('should convert symbols to string', () => {
            expect(toString(Symbol('test'))).toBe('Symbol(test)')
        })
    })

    describe('negative tests', () => {
        test('should handle objects gracefully', () => {
            expect(toString({})).toBe('[object Object]')
            expect(toString({ key: 'value' })).toBe('[object Object]')
        })
        test('should handle special numeric values', () => {
            expect(toString(Infinity)).toBe('Infinity')
            expect(toString(-Infinity)).toBe('-Infinity')
            expect(toString(NaN)).toBe('NaN')
        })
        test('should handle boolean values', () => {
            expect(toString(true)).toBe('true')
            expect(toString(false)).toBe('false')
        })

    })
})