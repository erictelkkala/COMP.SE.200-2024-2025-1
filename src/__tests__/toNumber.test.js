import toNumber from '../toNumber';

describe('toNumber', () => {
    describe("positive tests", () => {
      test('numbers are handled like numbers', () => {
        expect(toNumber(13)).toBe(13)
        expect(toNumber(3.14)).toBe(3.14)
        expect(toNumber(Infinity)).toBe(Infinity)
        expect(toNumber(0)).toBe(0)
        expect(toNumber(-12)).toBe(-12)
      })
    
      test('strings that are numbers should work properly', () => {
        expect(toNumber('13')).toBe(13)
        expect(toNumber('3.14')).toBe(3.14)
        expect(toNumber('  -12  ')).toBe(-12)
      })
      test('should correctly handle binary, octal, and hexadecimal strings', () => {
        expect(toNumber('0b101')).toBe(5)
        expect(toNumber('0o77')).toBe(63)
        expect(toNumber('0xFF')).toBe(255)
      })

      test('should handle large and small numbers', () => {
        expect(toNumber(Number.MAX_VALUE)).toBe(Number.MAX_VALUE)
        expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
        expect(toNumber('1e308')).toBe(1e308)
      })

    })
    describe("negative tests", () => {
      test('string is not number so it should return NaN', () => {
        expect(toNumber('hello')).toBeNaN()
      })

      test('should return NaN for symbols', () => {
        expect(toNumber(Symbol('test'))).toBeNaN()
      })
    
      test('should return NaN for objects that cannot be converted to numbers', () => {
        expect(toNumber({})).toBeNaN()
        expect(toNumber([])).toBe(0)
        expect(toNumber([42])).toBe(42)
        expect(toNumber([1, 2])).toBeNaN()
      })
    
      test('should handle special cases', () => {
        expect(toNumber(null)).toBe(0)
        expect(toNumber(undefined)).toBeNaN()
        expect(toNumber('')).toBe(0)
        expect(toNumber(true)).toBe(1)
        expect(toNumber(false)).toBe(0)
      })
      })
  })