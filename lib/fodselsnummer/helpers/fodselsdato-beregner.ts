import moment = require('moment');
import { padLeft } from '../../utils/string-utils';
import { erDnummer } from './fodselsnummer-utils';

export function fødselsnummerTilDato(fødselsnummer: string): Date {
    if (fødselsnummer.length !== 11) {
        throw Error('Ugyldig lengde på fødselsnummer: ' + fødselsnummer);
    }

    const dag = getDag(fødselsnummer);

    const fireSifretÅr = getFiresifretÅr(fødselsnummer);
    const måned = fødselsnummer.substring(2, 4);
    return moment(`${fireSifretÅr}-${måned}-${dag}`).toDate();
}

function getDag(fødselsnummer: string): string {
    let dag = Number(fødselsnummer.substring(0, 2));
    if (erDnummer(fødselsnummer)) {
        dag = dag - 40;
    } else if (dag >= 72) {
        throw Error('Fødselsnummer er av ukjent format: ' + fødselsnummer);
    }

    return padLeft(String(dag), 2, '0');
}

function getFiresifretÅr(fødselsnummer: string) {
    const year = Number(fødselsnummer.substring(4, 6));
    const individnummer = Number(fødselsnummer.substring(6, 9));

    if (individnummer < 500) {
        return year +  1900;
    } else if (individnummer < 750 && 56 < year) {
        return year + 1800;
    } else if (individnummer < 1000 && year < 40) {
        return year + 2000;
    } else if (900 < individnummer  || individnummer > 1000 || 39 >= year) {
        throw new Error('Ugyldig fødselsnummer: ' + fødselsnummer);
    } else {
        return year + 1900;
    }
}
