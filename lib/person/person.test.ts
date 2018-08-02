import navfaker from '../index';

test('Returnerer kjønn', () => {
    const faker = navfaker;

    const tilfeldigKjønn = faker.person.kjønn();

    expect(tilfeldigKjønn).toBeGreaterThanOrEqual(0);
    expect(tilfeldigKjønn).toBeLessThanOrEqual(1);
});

describe('antall barn', () => {

    test('Tilfeldig antall', () => {
        const faker = navfaker;

        const antallBarn = faker.person.antallBarn(new Date('1950-01-01'));

        expect(antallBarn).toBeGreaterThanOrEqual(0);
    });

    test('Barn har ikke barn', () => {
        const faker = navfaker;

        const antallBarn = faker.person.antallBarn(new Date());

        expect(antallBarn).toEqual(0);
    });

});
