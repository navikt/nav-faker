import navfaker from '../index';

test('Generer gyldig fødselsnummer', () => {
    const faker = navfaker;
    expect(faker.fødselsnummer.generer()).toHaveLength(11);
});

test('Parser fødselsdato', () => {
    const faker = navfaker;
    const fødselsdato = faker.fødselsnummer.getFødselsdato('10108000398');
    expect(fødselsdato.getFullYear()).toEqual(1980);
    expect(fødselsdato.getDate()).toEqual(10);
    expect(fødselsdato.getMonth()).toEqual(9);
});
