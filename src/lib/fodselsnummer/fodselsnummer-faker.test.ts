import navfaker from '../index';

test('Generer gyldig fødselsnummer', () => {
    const faker = navfaker;
    expect(faker.fødselsnummer.generer()).toHaveLength(11);
});
