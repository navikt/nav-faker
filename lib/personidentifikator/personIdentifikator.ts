import moment = require('moment');
import NavFaker from '../navfaker';
import { getConfigOrDefault } from './helpers/config-helper';
import { fødselsnummerTilDato } from './helpers/fodselsdato-beregner';
import FødselsnummerBeregner from './helpers/fodselsnummerBeregner';

export enum Kjønn {
    KVINNE = 0,
    MANN = 1,
}

class PersonIdentifikator {

    private faker: NavFaker;

    constructor(faker: NavFaker) {
        this.faker = faker;
    }

    public fødselsnummer(fødselsdato?: Date, kjønn?: number): string {
        const parsedOptions = getConfigOrDefault(this.faker, {fødselsdato, kjønn}, false);
        return new FødselsnummerBeregner(this.faker, parsedOptions).tilfeldigFødselsnummer();
    }

    public dnummer(fødselsdato?: Date, kjønn?: number): string {
        const parsedOptions = getConfigOrDefault(this.faker, {fødselsdato, kjønn}, true);
        return new FødselsnummerBeregner(this.faker, parsedOptions).tilfeldigFødselsnummer();
    }

    public myndigFødselsnummer(kjønn?: number): string {
        const maxAlder = moment().subtract(100, 'years').toDate();
        const minAlder = moment().subtract(18, 'years').toDate();
        const fødselsdato = this.faker.dato.mellom(maxAlder, minAlder);

        return this.fødselsnummer(fødselsdato, kjønn);
    }

    public getFødselsdato(fødselsnummer: string): Date {
        return fødselsnummerTilDato(fødselsnummer);
    }
}

export default PersonIdentifikator;
