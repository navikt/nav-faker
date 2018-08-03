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
            const tilfeldigTall = navfaker.random.number({min: 5, max: 9});

            expect(tilfeldigTall).toBeGreaterThanOrEqual(5);
            expect(tilfeldigTall).toBeLessThanOrEqual(9);
        });
        test('Med kun et mulig tall', () => {
            const tilfeldigTall = navfaker.random.number({min: 5, max: 5});

            expect(tilfeldigTall).toEqual(5);
        });
    });

    describe('Med tall som parameter', () => {
        test('Positivt tall', () => {
            const tilfeldigTall = navfaker.random.number(10);

            expect(tilfeldigTall).toBeGreaterThanOrEqual(0);
            expect(tilfeldigTall).toBeLessThanOrEqual(10);
        });

        test('0', () => {
            const tilfeldigTall = navfaker.random.number(0);

            expect(tilfeldigTall).toEqual(0);
        });

        test('Negativt tall', () => {
            const tilfeldigTall = navfaker.random.number(-5);

            expect(tilfeldigTall).toBeLessThanOrEqual(0);
            expect(tilfeldigTall).toBeGreaterThanOrEqual(-5);
        });
    });

    describe('Med ingen parameter', () => {
        test('Returnerer et positivt tall', () => {
            const tilfeldigTall = navfaker.random.number();

            expect(tilfeldigTall).toBeGreaterThanOrEqual(0);
        });
    });

});
