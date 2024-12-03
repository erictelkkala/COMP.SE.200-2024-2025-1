import get from '../get'
import {expect, describe, test} from '@jest/globals'

describe('get', () => {
    describe('positive tests', () => {
        test('get returns value from object with string path', () => {
            const object = {'a': 1, 'b':2}
            expect(get(object, 'a')).toEqual(1)
        })

        test('get returns value from array with string path', () => {
            const array = [1,2,3,4,5]
            expect(get(array, '[1]')).toEqual(2)
        })

        test('get returns default value if provided with bad string path', () => {
            const object = {'a': 1, 'b': 2}
            expect(get(object, 'a.b.c', 'defaultValue')).toEqual('defaultValue')
        })

        test('get returns value from object with array path', () => {
            const object = {'a': 1, 'b':2}
            expect(get(object, ['a'])).toEqual(1)
        })

        test('get returns value from array with array path', () => {
            const array = [1,2,3,4,5]
            expect(get(array, ['1'])).toEqual(2)
        })

        test('get returns default value if provided with bad array path', () => {
            const object = {'a': 1, 'b': 2}
            expect(get(object, ['a', 'b', 'c'], 'defaultValue')).toEqual('defaultValue')
        })

        test('get return value from complex object', () => {
            const object = { 'a': [{ 'b': { 'c': 3 } }] }
            expect(get(object, ['a', '0', 'b', 'c'])).toEqual(3)
        })
    })

    describe('negative tests', () => {
        test('get return undefined if no default value is provided for bad path', () => {
            const object = {'a': 1, 'b': 2}
            expect(get(object, 'a.4.2')).toEqual(undefined)
        })

        test('get return undefined for null object', () => {
            expect(get(null, 'a.4.2')).toEqual(undefined)
        })

        test('get return undefined for undefined object', () => {
            expect(get(undefined, 'a.4.2')).toEqual(undefined)
        })
    })
})