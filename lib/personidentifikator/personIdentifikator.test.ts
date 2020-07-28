import navfaker from '../index';
import {erGyldigFødselsnummer} from './helpers/fodselsnummer-utils';

test('Generer gyldig personIdentifikator', () => {
    const fødselsnummer = navfaker.personIdentifikator.fødselsnummer();
    expect(fødselsnummer).toHaveLength(11);
    expect(erGyldigFødselsnummer(fødselsnummer)).toEqual(true);
});

test('Generer myndigFødselsnummer personIdentifikator', () => {
    const fødselsnummer = navfaker.personIdentifikator.myndigFødselsnummer();

    const fødselsdato = navfaker.personIdentifikator.getFødselsdato(fødselsnummer);
    const alder = new Date(new Date().getTime() - fødselsdato.getTime()).getFullYear() - 1970;

    expect(alder).toBeLessThanOrEqual(100);
    expect(alder).toBeGreaterThanOrEqual(18);
    expect(erGyldigFødselsnummer(fødselsnummer)).toEqual(true);
});

test('Parser fødselsdato', () => {
    const fødselsdato = navfaker.personIdentifikator.getFødselsdato('10108000398');

    expect(fødselsdato.getFullYear()).toEqual(1980);
    expect(fødselsdato.getDate()).toEqual(10);
    expect(fødselsdato.getMonth()).toEqual(9);
});

describe('d-nummer', () => {

    test('Lager d-nummer', () => {
        const dnummer = navfaker.personIdentifikator.dnummer();
        const førsteSiffer = Number(dnummer.charAt(0));

        expect(dnummer.length).toEqual(11);
        expect(førsteSiffer).toBeGreaterThanOrEqual(4);
        expect(førsteSiffer).toBeLessThanOrEqual(7);
        expect(erGyldigFødselsnummer(dnummer)).toEqual(true);
    });

});
