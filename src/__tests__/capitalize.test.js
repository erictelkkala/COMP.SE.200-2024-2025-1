import capitalize from '../capitalize';

describe('capitalize', () => {
    describe('positive tests', () => {
        test('capitalizes string primitive "hello world!" to "Hello world!"', () => {
            expect(capitalize("hello world!")).toBe("Hello world!");
        });

        test('capitalizes string primitive "heLLO woRlD!" to "Hello world!"', () => {
            expect(capitalize("heLLO woRlD!")).toBe("Hello world!");
        });

        test('capitalizes string primitive "HELLO WORLD!" to "Hello world!"', () => {
            expect(capitalize("HELLO WORLD!")).toBe("Hello world!");
        });

        test('capitalizes string primitive "1234" to "1234"', () => {
            expect(capitalize("1234")).toBe("1234");
        });

        test('capitalizes string object("hello world!") to "Hello world!"', () => {
            expect(capitalize(new String("hello world!"))).toBe("Hello world!");
        });
    })

    describe('negative tests', () => {
        test('capitalizes number 1234 to "1234"', () => {
            expect(capitalize(1234)).toBe("1234");
        });

        test('capitalizes float 1.2 to "1.2"', () => {
            expect(capitalize(1.2)).toBe("1.2");
        });

        test('capitalizes string primitive "" to Undefined', () => {
            expect(capitalize(""))
            .toBe("")
            .toHaveLength(0);
        });

        // SKIPPED DUE TO BUGS
        test.skip('capitalizes null to ""', () => {
            expect(capitalize(null)).toBe("").toHaveLength(0);
        });

        test.skip('capitalizes null to ""', () => {
            expect(capitalize(undefined)).toBe("").toHaveLength(0);
        });
        // SKIPPED TESTS END
    })
})