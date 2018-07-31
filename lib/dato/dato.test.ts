import navfaker from '../index';

test('Genererer tilfeldig dato mellom to datoer', () => {
    const date1 = new Date('1990-01-01');
    const date2 = new Date('1995-01-01');

    const tilfeldigDato = navfaker.dato.mellom(date1, date2);
    const år = tilfeldigDato.getFullYear();

    expect(år).toBeGreaterThanOrEqual(1990);
    expect(år).toBeLessThanOrEqual(1995);
});

test('Genererer tilfeldig dato for x antall år siden', () => {
    const tilfeldigDato = navfaker.dato.forÅrSiden(1);
    const år = tilfeldigDato.getFullYear();

    expect(år).toEqual(new Date().getFullYear() - 1);
});
