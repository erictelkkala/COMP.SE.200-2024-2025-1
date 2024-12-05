import drop from '../drop';

describe('drop', () => {
    describe('positive tests', () => {
        describe('common array cases', () => {
            test('should drop the first element from the beginning by default, if no parameter is provided', () => {
                expect(drop([1, 2, 3])).toEqual([2, 3])
            })
        
            test('should drop 2 elements from the beginning', () => {
                expect(drop([1, 2, 3], 2)).toEqual([3])
            })
        
            test('should return an empty array if n exceeds array length', () => {
                expect(drop([1, 2, 3], 5)).toEqual([])
            })
        
            test('should return the original array if n is 0', () => {
                expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3])
            })
            test('should handle an empty array and return an empty array', () => {
                expect(drop([], 1)).toEqual([])
            })
        })
        describe('special cases', () => {
            test('should work with negative `n` by treating it as 0', () => {
                expect(drop([1, 2, 3], -1)).toEqual([1, 2, 3])
            })
        
            test('should handle non-integer `n` by converting it to integer', () => {
                expect(drop([1, 2, 3], 2.5)).toEqual([3])
            })
        })
    
    })
    describe('negative tests', () => {
        test('should return an empty array for null input', () => {
            expect(drop(null)).toEqual([])
        })
    
        test('should return an empty array for undefined input', () => {
            expect(drop(undefined)).toEqual([])
        })
    
        test('should return an empty array if array is not an array (e.g., number)', () => {
            expect(drop(123, 1)).toEqual([])
        })
    
        test('should return an empty array if array is not an array (e.g., object)', () => {
            expect(drop({ a: 1, b: 2 }, 1)).toEqual([])
        })
    
        test('should return the original array if n is NaN', () => {
            expect(drop([1, 2, 3], NaN)).toEqual([1, 2, 3])
        })
    
        test('should return the original array if n is null', () => {
            expect(drop([1, 2, 3], null)).toEqual([1, 2, 3])
        })

        test('should return the array without first element if n is undefined', () => {
            expect(drop([1, 2, 3], undefined)).toEqual([2, 3])
        })
    
        test('should return an empty array if n is undefined and array is null', () => {
            expect(drop(null, undefined)).toEqual([])
        })
    
        test('should return the array if n is a string that cannot be converted to a number', () => {
            expect(drop([1, 2, 3], 'abc')).toEqual([1, 2, 3])
        })

    })
})