import toNumber from '../toNumber';

describe('toNumber', () => {
    describe('positive tests', () => {
      describe('numbers are numbers', () => {
        test('13 should be 13', () => {
          expect(toNumber(13)).toBe(13)
        })
        test('decimal 3.14 should be 3.14', () => {
          expect(toNumber(3.14)).toBe(3.14)
        })
        test('negative number should be the same', () => {
          expect(toNumber(-12)).toBe(-12)
        })
        test('0 should be 0', () => {
          expect(toNumber(0)).toBe(0)
        })
        test('infinity should be infinity', () => {
          expect(toNumber(Infinity)).toBe(Infinity)
        })
        test('handle large numbers', () => {
          expect(toNumber(Number.MAX_VALUE)).toBe(Number.MAX_VALUE)
        })
        test('handle small numbers', () => {
          expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
        })
      })
      describe('strings that are numbers', () => {
        test('"13" should be 13', () => {
          expect(toNumber('13')).toBe(13)
        })
        test('"3.14" should be 3.14', () => {
          expect(toNumber('3.14')).toBe(3.14)
        })
        test('"  -12   " should be -12', () => {
          expect(toNumber('  -12   ')).toBe(-12)
        })
        test('handle big numbers when string', () => {
          expect(toNumber('1e308')).toBe(1e308)
        })
      })
      describe('binary, octal and hexadecimals', () => {
        test('binary should be 5', () => {
          expect(toNumber('0b101')).toBe(5)
        })
        test('octal should 63', () => {
          expect(toNumber('0o77')).toBe(63)
        })
        test('hexadecimal should be 255', () => {
          expect(toNumber('0xFF')).toBe(255)
        })
      })
    })
    describe("negative tests", () => {
      describe('values that should return NaN', () => {
        test('string is not number so it should return NaN', () => {
          expect(toNumber('hello')).toBeNaN()
        })
        test('should return NaN for symbols', () => {
          expect(toNumber(Symbol('test'))).toBeNaN()
        })
        test('return NaN for object that cannot be converted to number', () => {
          expect(toNumber({})).toBeNaN()
        })
        test('return NaN for object that cannot be converted to number', () => {
          expect(toNumber([1, 2])).toBeNaN()
        })
      })
      describe('special cases', () => {
        test('empty array should be 0', () => {
          expect(toNumber([])).toBe(0)
        })
        test('array with one value of 42 should be 42', () => {
          expect(toNumber([42])).toBe(42)
        })
        test('null should be 0', () => {
          expect(toNumber(null)).toBe(0)
        })
        test('undefined should be NaN', () => {
          expect(toNumber(undefined)).toBeNaN()
        })
        test('empty string is 0', () => {
          expect(toNumber('')).toBe(0)
        })
        test('true is 1', () => {
          expect(toNumber(true)).toBe(1)
        })
        test('false is 0', () => {
          expect(toNumber(false)).toBe(0)
        })
      })
      })
  })