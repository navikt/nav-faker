import { datoSomStreng } from './fodselsnummer-utils';

test('Konverterer dato til streng', () => {
    const date = new Date('1995-12-17T03:24:00');
    expect(datoSomStreng(date)).toEqual('171295');
});

test('Konverterer dato til streng som er padding til korrekt format', () => {
    const date = new Date('1995-01-02T03:24:00');
    expect(datoSomStreng(date)).toEqual('020195');
});