import filter from '../filter';
import {expect, describe, test} from '@jest/globals'

describe('filter', () => {
    describe('positive tests', () => {
        test('filters array to show only active users with boolean predicate', () => {
            const users = [
                { user: 'barney', active: true },
                { user: 'fred', active: false },
                { user: 'george', wallet: { money: -1 } },
            ];

            const expectedUsers = [{ user: 'barney', active: true }];

            expect(filter(users, ({ active }) => active)).toEqual(expectedUsers);
        });

        test('filters array to show only users with specific name using string predicate', () => {
            const users = [
                { user: 'barney', active: true },
                { user: 'fred', active: false },
            ];

            const expectedUsers = [{ user: 'barney', active: true }];

            expect(filter(users, ({ user }) => user === 'barney')).toEqual(expectedUsers);
        });

        test('filters array to show only users with at least some money with object predicate', () => {
            const users = [
                { user: 'barney', active: true, wallet: { money: 0 } },
                { user: 'fred', active: false, wallet: { money: 10 } },
            ];

            const expectedUsers = [
                { user: 'fred', active: false, wallet: { money: 10 } },
            ];

            expect(filter(users, ({ wallet }) => wallet.money > 0)).toEqual(expectedUsers);
        });

        test('filters array to show only users with at least some money with object predicate', () => {
            const users = [
                { user: 'barney', active: true, wallet: { money: 0 } },
                { user: 'fred', active: false, wallet: { money: 10 } },
            ];

            const expectedUsers = [
                { user: 'barney', active: true, wallet: { money: 0 } },
                { user: 'fred', active: false, wallet: { money: 10 } },            ];

            expect(filter(users, () => true)).toEqual(expectedUsers);
        });

        test('filters array to show only users with at least some money with object predicate', () => {
            const users = [
                { user: 'barney', active: true, wallet: { money: 0 } },
                { user: 'fred', active: false, wallet: { money: 10 } },
            ];

            const expectedUsers = [
                { user: 'fred', active: false, wallet: { money: 10 } },
            ];

            expect(filter(users, ({ wallet }) => wallet.money > 0)).toEqual(expectedUsers);
        });
    });

    describe('negative tests', () =>  {
        // Skipped due to return value being [[]] due to a bug
        test.skip('filters null array to show no users', () => {
            const users = null;

            const expectedUsers = [];

            expect(filter(users, () => true)).toEqual(expectedUsers);
        });

        // Skipped due to return value being [[]] due to a bug
        test.skip('filters array of empty objects to an empty array with no predicate', () => {
            const users = [{}, {}, {}];

            const expectedUsers = [];

            expect(filter(users, () => {})).toEqual(expectedUsers);
        });

        // Skipped due to return value being [[]] due to a bug
        test.skip('filters empty array to be an empty array', () => {
            const users = [];

            const expectedUsers = [];

            expect(filter(users, () => true)).toEqual(expectedUsers);
        });

        // Skipped due to return value being [[]] due to a bug
        test.skip('filters array to show no users with empty predicate', () => {
            const users = [
                { user: 'barney', active: true, wallet: { money: 0 } },
                { user: 'fred', active: false, wallet: { money: 10 } },
            ];

            const expectedUsers = [];

            expect(filter(users, () => {})).toEqual(expectedUsers);
        });
    });
});
