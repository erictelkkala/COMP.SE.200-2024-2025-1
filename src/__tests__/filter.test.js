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

            const expectedUser = [{ user: 'barney', active: true }];

            expect(filter(users, ({ active }) => active)).toEqual(expectedUser);
        });

        test('filters array to show only users with specific name using string predicate', () => {
            const users = [
                { user: 'barney', active: true },
                { user: 'fred', active: false },
            ];

            const expectedUser = [{ user: 'barney', active: true }];

            expect(filter(users, ({ user }) => user === 'barney')).toEqual(
                expectedUser,
            );
        });

        test('filters array to show only users with at least some money with object predicate', () => {
            const users = [
                { user: 'barney', active: true, wallet: { money: 0 } },
                { user: 'fred', active: false, wallet: { money: 10 } },
            ];

            const expectedUser = [
                { user: 'fred', active: false, wallet: { money: 10 } },
            ];

            expect(filter(users, ({ wallet }) => wallet.money > 0)).toEqual(
                expectedUser,
            );
        });

        test.skip('filters empty array to be an empty array', () => {
            const users = [];

            const expectedUser = [];

            expect(
                filter(users, ({ a }) => {
                    a;
                }),
            ).toEqual(expectedUser);
        });

        test.skip('filters array to show no users with empty predicate', () => {
            const users = [
                { user: 'barney', active: true, wallet: { money: 0 } },
                { user: 'fred', active: false, wallet: { money: 10 } },
            ];

            const expectedUser = [];

            expect(filter(users, () => {})).toEqual(expectedUser);
        });
    });

    describe('negative tests', () => {
        test('filters array to show only users with at least some money with object predicate', () => {
            const users = [
                { user: 'barney', active: true, wallet: { money: 0 } },
                { user: 'fred', active: false, wallet: { money: 10 } },
            ];

            const expectedUser = [
                { user: 'fred', active: false, wallet: { money: 10 } },
            ];

            expect(filter(users, ({ wallet }) => wallet.money > 0)).toEqual(
                expectedUser,
            );
        });

        test.skip('filters null array to show no users', () => {
            const users = null;

            const expectedUser = [];

            expect(filter(users, ({ a }) => {})).toEqual(expectedUser);
        });

        test('filters array to show empty users predicate', () => {
            const users = [{}, {}, {}];

            const expectedUser = [{}, {}, {}];

            expect(filter(users, ({ a }) => {})).toEqual(expectedUser);
        });
    });
});
