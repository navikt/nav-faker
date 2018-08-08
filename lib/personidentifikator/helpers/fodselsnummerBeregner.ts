import NavFaker from '../../navfaker';
import { padLeftNumber } from '../../utils/string-utils';
import { Kjønn } from '../personIdentifikator';
import { beregnKontrollsiffer1, beregnKontrollsiffer2 } from './fodselsnummer-utils';

export interface Options {
    fødselsdato: Date;
    kjønn: Kjønn;
    erDnummer: boolean;
}

function erMellom(tall: number, min: number, max: number) {
    return tall >= min && tall <= max;
}

function getLøpenummerSomListe(start: number, end: number) {
    return Array(end - start + 1).fill(0).map((_, index: number) => padLeftNumber(start + index, 3));
}

function datoSomStreng(dato: Date) {
    const dd = dato.getDate();
    const mm = dato.getMonth() + 1;
    const yy = dato.getFullYear() % 100;
    return `${padLeftNumber(dd, 2) + padLeftNumber(mm, 2) + padLeftNumber(yy, 2)}`;
}

class FødselsnummerBeregner {

    private faker: NavFaker;
    private options: Options;

    constructor(faker: NavFaker, options: Options) {
        this.faker = faker;
        this.options = options;
    }

    public tilfeldigFødselsnummer() {
        const gyldigeIndividNummere = this.getGyldigeIndividnummere();
        const tilfeldigIndividNummer =
            gyldigeIndividNummere[this.faker.random.integer(gyldigeIndividNummere.length - 1)];

        const justertFødselsdato = this.justerFødselsdatoForDnummer();
        const k1 = beregnKontrollsiffer1(justertFødselsdato + tilfeldigIndividNummer);
        const k2 = beregnKontrollsiffer2(justertFødselsdato + tilfeldigIndividNummer + k1);

        return justertFødselsdato + tilfeldigIndividNummer + k1 + k2;
    }

    private getGyldigeIndividnummere() {
        return this.getIndividsiffereForÅrstall()
            .filter((individSiffer) => this.individsifferHarRiktigKjønn(individSiffer))
            .filter((individSiffer) => this.gyldigeKontrollsiffere(individSiffer));
    }

    private getIndividsiffereForÅrstall() {
        const year = this.options.fødselsdato.getFullYear();

        if (erMellom(year, 1854, 1899)) {
            return getLøpenummerSomListe(500, 749);
        } else if (erMellom(year, 1900, 1999)) {
            return getLøpenummerSomListe(0, 500);
        } else if (erMellom(year, 2000, 2039)) {
            return getLøpenummerSomListe(500, 999);
        } else {
            throw new Error('Ugyldig dato');
        }
    }

    private individsifferHarRiktigKjønn(individnummer: string) {
        const kjønnSiffer = Number(individnummer.charAt(2));
        return kjønnSiffer % 2 === this.options.kjønn;
    }

    private gyldigeKontrollsiffere(individnummer: string) {
        const fødselsdato = this.justerFødselsdatoForDnummer();
        const fødselsnummer = fødselsdato + individnummer;
        const k1 = beregnKontrollsiffer1(fødselsnummer);
        if (k1 === 10) {
            return false;
        }
        if (beregnKontrollsiffer2(fødselsnummer + k1) === 10) {
            return false;
        }
        return true;
    }

    private justerFødselsdatoForDnummer(): string {
        const fødselsdato = datoSomStreng(this.options.fødselsdato);
        if (!this.options.erDnummer) {
            return fødselsdato;
        }
        const førsteSiffer = Number(fødselsdato.charAt(0)) + 4;
        return String(førsteSiffer).concat(fødselsdato.substring(1));
    }

}

export default FødselsnummerBeregner;
