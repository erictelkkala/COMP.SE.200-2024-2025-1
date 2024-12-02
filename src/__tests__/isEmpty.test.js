import isEmpty from '../isEmpty';

describe('isEmpty', () => {
    describe('positive tests', () => {
        test('should return true for null, undefined, true and 1', () => {
            expect(isEmpty(null)).toBe(true)
            expect(isEmpty(undefined)).toBe(true)
            expect(isEmpty(true)).toBe(true)
            expect(isEmpty(1)).toBe(true)
        })
        test('should return true for empty arrays and strings', () => {
            expect(isEmpty([])).toBe(true)
            expect(isEmpty('')).toBe(true)
        })
        test('should return true for empty objects', () => {
            expect(isEmpty({})).toBe(true)
        })
        test('should return true for empty Map and Set', () => {
            expect(isEmpty(new Map())).toBe(true)
            expect(isEmpty(new Set())).toBe(true)
        })
        test('should return true for empty prototype objects', () => {
            function Foo() {}
            Foo.prototype.bar = 'baz'
            expect(isEmpty(new Foo())).toBe(true)
        })
        test('should return true for false', () => {
            expect(isEmpty(false)).toBe(false)
        })
        test('should return false for 0', () => {
            expect(isEmpty(0)).toBe(false)
        })
    })
    describe('negative tests', () => {
        test('should return false for non-empty arrays and strings', () => {
            expect(isEmpty([1, 2, 3])).toBe(false)
            expect(isEmpty('abc')).toBe(false)
        })
        test('should return false for objects with own properties', () => {
            expect(isEmpty({ a: 1 })).toBe(false)
        })
        test('should return false for non-empty Map and Set', () => {
            const map = new Map()
            map.set('key', 'value')
            const set = new Set()
            set.add(1)
            expect(isEmpty(map)).toBe(false)
            expect(isEmpty(set)).toBe(false)
        })
        test('should return false for objects with inherited properties', () => {
            const obj = Object.create({ a: 1 })
            expect(isEmpty(obj)).toBe(true)
        
            obj.b = 2
            expect(isEmpty(obj)).toBe(false)
        })
        test('should return false for buffers and typed arrays with content', () => {
            const buffer = Buffer.from([1, 2, 3])
            expect(isEmpty(buffer)).toBe(false)
        
            const typedArray = new Uint8Array([1, 2, 3])
            expect(isEmpty(typedArray)).toBe(false)
        })
        test('should return false for arguments object with values', () => {
            function testFunc() {
              expect(isEmpty(arguments)).toBe(false)
            }
            testFunc(1, 2, 3)
        })
    })
})