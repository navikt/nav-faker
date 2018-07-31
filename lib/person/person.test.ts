import navfaker from '../index';

test('Returnerer kjønn', () => {
    const faker = navfaker;

    const tilfeldigKjønn = faker.person.kjønn();

    expect(tilfeldigKjønn).toBeGreaterThanOrEqual(0);
    expect(tilfeldigKjønn).toBeLessThanOrEqual(1);
});
