import isEmpty from '../isEmpty';

describe('isEmpty', () => {
    describe('positive tests', () => {
        describe('cases that should be true', () => {
            test('should return true for null', () => {
                expect(isEmpty(null)).toBe(true)
            })
            test('should return true for undefined', () => {
                expect(isEmpty(undefined)).toBe(true)
            })
            test('should return true for true', () => {
                expect(isEmpty(true)).toBe(true)
            })
            test('should return true for 1', () => {
                expect(isEmpty(1)).toBe(true)
            })
        })
        describe('arrays, strings and objects', () => {
            test('should return true for empty array', () => {
                expect(isEmpty([])).toBe(true)
            })
            test('should return true for empty string', () => {
                expect(isEmpty('')).toBe(true)
            })
            test('should return true for empty object', () => {
                expect(isEmpty({})).toBe(true)
            })
        })
        describe('empty Map and Set, empty prototype objects', () => {
            test('should return true for empty Map', () => {
                expect(isEmpty(new Map())).toBe(true)
            })
            test('should return true for empty Set', () => {
                expect(isEmpty(new Set())).toBe(true)
            })
            test('should return true for empty prototype objects', () => {
                function Foo() {}
                Foo.prototype.bar = 'baz'
                expect(isEmpty(new Foo())).toBe(true)
            })
        })
        describe('False and 0', () => {
            test('should return true for false', () => {
                expect(isEmpty(false)).toBe(true)
            })
            test('should return true for 0', () => {
                expect(isEmpty(0)).toBe(true)
            })
        })
    })
    describe('negative tests', () => {
        describe('arrays and strings', () => {
            test('should return false for non-empty arrays', () => {
                expect(isEmpty([1, 2, 3])).toBe(false)
            })
            test('should return false for non-empty strings', () => {
                expect(isEmpty('abc')).toBe(false)
            })
        })
        test('should return false for objects with own properties', () => {
            expect(isEmpty({ a: 1 })).toBe(false)
        })
        describe('Map and Set', () => {
            test('should return false for non-empty Map', () => {
                const map = new Map()
                map.set('key', 'value')
                expect(isEmpty(map)).toBe(false)
            })
            test('should return false for non-empty Set', () => {
                const set = new Set()
                set.add(1)
                expect(isEmpty(set)).toBe(false)
            })
        })
        describe('objects, buffers and typed arrays', () => {
            test('should return false for objects with inherited properties', () => {
                const obj = Object.create({ a: 1 })
                expect(isEmpty(obj)).toBe(true)
            
                obj.b = 2
                expect(isEmpty(obj)).toBe(false)
            })
            test('should return false for arguments object with values', () => {
                function testFunc() {
                  expect(isEmpty(arguments)).toBe(false)
                }
                testFunc(1, 2, 3)
            })
            test('should return false for buffers with content', () => {
                const buffer = Buffer.from([1, 2, 3])
                expect(isEmpty(buffer)).toBe(false)
            })
            test('should return false for typed arrays with content', () => {
                const typedArray = new Uint8Array([1, 2, 3])
                expect(isEmpty(typedArray)).toBe(false)
            })
        })
    })
})