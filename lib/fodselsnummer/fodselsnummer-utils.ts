import NavFaker from '../navfaker';
import { padLeftNumber } from '../utils/string-utils';
import { Kjønn } from './fodselsnummer';

export function datoSomStreng(dato: Date) {
    const dd = dato.getDate();
    const mm = dato.getMonth() + 1;
    const yy = dato.getFullYear() % 100;
    return `${padLeftNumber(dd, 2) + padLeftNumber(mm, 2) + padLeftNumber(yy, 2)}`;
}

export function beregnKontrollsiffer1(fodselsnummer: string) {
    const kontrollSiffer1Multiplikatorer = [3, 7, 6, 1, 8, 9, 4, 5, 2];
    return beregnKontrollsiffer(fodselsnummer, kontrollSiffer1Multiplikatorer);
}

export function beregnKontrollsiffer2(fodselsnummer: string): number {
    const kontrollSiffer2Multiplikatorer = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    return beregnKontrollsiffer(fodselsnummer, kontrollSiffer2Multiplikatorer);
}

function beregnKontrollsiffer(fodselsnummer: string, multiplikatorTabell: number[]) {
    let sum = 0;
    for (let i = 0; i < multiplikatorTabell.length; i++) {
        sum += parseInt(fodselsnummer[i], 10) * multiplikatorTabell[i];
    }
    const rest = sum % 11;

    if (rest === 0) { return 0; }
    return 11 - rest;
}

export function tilfeldigKjønn(navFaker: NavFaker) {
    const randomNumber = navFaker.random.number(1);
    if (randomNumber === 0) {
        return Kjønn.MANN;
    }
    return Kjønn.KVINNE;
}
