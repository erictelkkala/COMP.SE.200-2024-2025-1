import isObject from '../isObject';
import {expect, describe, test} from '@jest/globals'

describe('isObject', () => {
    describe('positive tests', () => {
        test('{} is an object', () => {
            expect(isObject({})).toBe(true);
        })

        test('[] is an object', () => {
            expect(isObject([])).toBe(true);
        })

        test('A function is an object', () => {
            expect(isObject(() => {})).toBe(true);
        })

        test('Object wrapper String is an object', () => {
            expect(isObject(new String("Hello world!"))).toBe(true);
        })

        test('Error is an object', () => {
            expect(isObject(new Error())).toBe(true);
        })

        test('Date is an object', () => {
            expect(isObject(new Date(Date.now()))).toBe(true);
        })

        test('RegExp is an object', () => {
            expect(isObject(/Hello world!/i)).toBe(true);
        })

        test('Object wrapper Number is an object', () => {
            expect(isObject(new Number(0))).toBe(true);
        })
    })

    describe('negative tests', () => {
        test('null is not an object', () => {
            expect(isObject(null)).toBe(false);
        })

        test('undefined is not an object', () => {
            expect(isObject(undefined)).toBe(false);
        })

        test('Primitive String is an object', () => {
            expect(isObject(String("Hello world!"))).toBe(false);
        })

        test('Primitive Number is not an object', () => {
            expect(isObject(10)).toBe(false);
        })

        test('Primitive Boolean is not an object', () => {
            expect(isObject(false)).toBe(false);
        })
    })
});
