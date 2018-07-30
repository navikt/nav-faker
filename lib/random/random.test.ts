import navfaker from '../index';

test('vektet sjansje', () => {
    const faker = navfaker;

    const result = faker.random.vektetSjanse(0.7);

    expect(typeof result).toBe('boolean');
});
