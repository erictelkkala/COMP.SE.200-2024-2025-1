import add from '../add';

describe('add', () => {
    describe('positive tests', () => {
        describe('number values', () => {
            test('adds 1 + 2 to equal 3', () => {
                expect(add(1, 2)).toEqual(3);
            });

            test('adds -1 + -2 to equal -3', () => {
                expect(add(-1, -2)).toEqual(-3);
            });

            test('adds 1.1 + 2.2 to equal 3.3', () => {
                expect(add(1.1, 2.2)).toBeCloseTo(3.3); // Float, so needs to be approx.
            });

            test('adds 0 + 0 to equal 0', () => {
                expect(add(0, 0)).toEqual(0);
            });

            test('adds 1.1 + 2.2 to equal 3.3', () => {
                expect(add(1.1, 2.2)).toBeCloseTo(3.3);
            });
        })

        describe('string values', () => {
            test('adds "1" + "2" to equal "12"', () => {
                expect(add("1", "2")).toEqual("12");
            });

            test('adds "1.1" + "2.2" to equal "1.12.2"', () => {
                expect(add("1.1", "2.2")).toEqual("1.12.2");
            });

            test('adds "1.1" + 2.2 to equal "1.12.2"', () => {
                expect(add("1.1", 2.2)).toEqual("1.12.2");
            });

            test('adds 1.1 + "2.2" to equal "1.12.2"', () => {
                expect(add(1.1, "2.2")).toEqual("1.12.2");
            });
        })
    })

    describe('negative tests', () => {
        test('adds 1 + 5 to NOT equal 5', () => {
            expect(add(1, 5)).not.toEqual(5)
        })

        test('adds undefined + undefined to equal 0', () => {
            expect(add(undefined, undefined)).toEqual(0);
        })

        test('adds null + null to equal 0', () => {
            expect(add(null, null)).toEqual(0);
        })

        test('adds null + 1 to equal 1', () => {
            expect(add(null, 1)).toEqual(1);
        })

        test('adds 2 + null to equal 2', () => {
            expect(add(2, null)).toEqual(2);
        })

        test('adds 1 + undefined to equal 1', () => {
            expect(add(1, undefined)).toEqual(1);
        })

        test('adds undefined + 2 to equal 2', () => {
            expect(add(undefined, 2)).toEqual(2);
        })

        test('adds "1" + undefined to equal "1"', () => {
            expect(add("1", undefined)).toEqual("1");
        })

        test('adds undefined + "2" to equal "2"', () => {
            expect(add(undefined, "2")).toEqual("2");
        })
    })
})

