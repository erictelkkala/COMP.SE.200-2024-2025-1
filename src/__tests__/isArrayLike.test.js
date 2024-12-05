import isArrayLike from '../isArrayLike';
import { JSDOM } from 'jsdom';

describe('isArrayLike', () => {
    describe('positive tests', () => {
        describe('arrays', () => {
            test('should return true for populated arrays', () => {
                expect(isArrayLike([1, 2, 3])).toBe(true)
            });
            test('should return true for empty arrays', () => {
                expect(isArrayLike([])).toBe(true)
            });
        })
        describe('strings', () => {
            test('should return true for empty strings', () => {
                expect(isArrayLike('')).toBe(true)
            });
            test('should return true for populated strings', () => {
                expect(isArrayLike('abc')).toBe(true)
            });
        })
        describe('array like objects', () => {
            test('should return true for populated array-like objects', () => {
                const arrayLikeObject = { length: 3, 0: 'a', 1: 'b', 2: 'c' }
                expect(isArrayLike(arrayLikeObject)).toBe(true)
            })
            test('should return true for empty array-like objects', () => {
                const emptyArrayLike = { length: 0 }
                expect(isArrayLike(emptyArrayLike)).toBe(true)
            })
        })
        describe('documents', () => {
            test('document children should be like array', () => {
                const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
                const document = dom.window.document
                
                const fragment = document.createDocumentFragment()

                expect(isArrayLike(fragment.children)).toBe(true)
              })
        })
    })

    describe('negative tests', () => {
        describe('functions', () => {
            test('should return false for functions', () => {
                expect(isArrayLike(() => {})).toBe(false)
            })
            test('should return false for functions', () => {
                expect(isArrayLike(new Function())).toBe(false)
            })
        })
        describe('arrays', () => {
            test('should return false for empty non-array-like objects', () => {
                expect(isArrayLike({})).toBe(false)
            })
            test('should return false for populated non-array-like objects', () => {
                expect(isArrayLike({ a: 1 })).toBe(false)
            })
        })
        describe('numbers and booleans', () => {
            test('should return false for number', () => {
                expect(isArrayLike(123)).toBe(false)
            })
            test('should return false for 0', () => {
                expect(isArrayLike(0)).toBe(false)
            })
            test('should return false for boolean', () => {
                expect(isArrayLike(true)).toBe(false)
            })
            test('should return false for boolean', () => {
                expect(isArrayLike(false)).toBe(false)
            })
        })
        describe('null and undefined', () => {
            test('should return false for null', () => {
                expect(isArrayLike(null)).toBe(false)
            })
            test('should return false for undefined', () => {
                expect(isArrayLike(undefined)).toBe(false)
            })
        })
        describe('objects', () => {
            test('should return false for objects without a numeric length property', () => {
                const objWithoutLength = { foo: 'bar' }
                expect(isArrayLike(objWithoutLength)).toBe(false)
            })
            test('should return false for objects without a numeric length property', () => {
                const objWithNonNumericLength = { length: 'abc' }
                expect(isArrayLike(objWithNonNumericLength)).toBe(false)
            })
        })
    })
});
