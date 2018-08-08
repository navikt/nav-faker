import navfaker from '../index';

describe('Vektet Sjanse', () => {
    test('Returnerer boolean', () => {
        const result = navfaker.random.vektetSjanse(0.7);

        expect(typeof result).toBe('boolean');
    });
});

describe('Number', () => {

    describe('Med interval som parameter', () => {
        test('Returnerer et tall i intervalet', () => {
            const tilfeldigTall = navfaker.random.integer(9, 5);

            expect(tilfeldigTall).toBeGreaterThanOrEqual(5);
            expect(tilfeldigTall).toBeLessThanOrEqual(9);
        });
        test('Med kun et mulig tall', () => {
            const tilfeldigTall = navfaker.random.integer(5, 5);

            expect(tilfeldigTall).toEqual(5);
        });
    });

    describe('Med tall som parameter', () => {
        test('Positivt tall', () => {
            const tilfeldigTall = navfaker.random.integer(10);

            expect(tilfeldigTall).toBeGreaterThanOrEqual(0);
            expect(tilfeldigTall).toBeLessThanOrEqual(10);
        });

        test('0', () => {
            const tilfeldigTall = navfaker.random.integer(0);

            expect(tilfeldigTall).toEqual(0);
        });

        test('Negativt tall', () => {
            const tilfeldigTall = navfaker.random.integer(-5);

            expect(tilfeldigTall).toBeLessThanOrEqual(0);
            expect(tilfeldigTall).toBeGreaterThanOrEqual(-5);
        });
    });

    describe('Med ingen parameter', () => {
        test('Returnerer et positivt tall', () => {
            const tilfeldigTall = navfaker.random.integer();

            expect(tilfeldigTall).toBeGreaterThanOrEqual(0);
        });
    });

});

describe('arrayElement', () => {
    describe('Med ingen elementer', () => {
        test('Returnerer undefined', () => {
            expect(navfaker.random.arrayElement([])).toEqual(undefined);
        });
    });

    describe('Med ett element', () => {
        test('Returnerer det elementet', () => {
            expect(navfaker.random.arrayElement(['Ibsen'])).toEqual('Ibsen');
        });
    });

    describe('Med flere element', () => {
        test('Returnerer et element', () => {
            expect(navfaker.random.arrayElement(['Ibsen', 'Bjørnson', 'Kielland', 'Lie']).length)
                .toBeGreaterThan(0);
        });
    });
});
