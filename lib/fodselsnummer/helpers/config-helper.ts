import { GenererFødselsnummerOptions, Kjønn } from '../fodselsnummer';
import { tilfeldigKjønn } from './fodselsnummer-utils';
import NavFaker from '../../navfaker';

export function getConfigOrDefault(navFaker: NavFaker, options?: GenererFødselsnummerOptions) {
    let fødselsdato;
    let kjønn;
    if (!options) {
        fødselsdato = navFaker.dato.mellom(new Date('1900-01-01'), new Date());
        kjønn = tilfeldigKjønn(navFaker);
    } else {
        fødselsdato = options.fødselsdato;
        kjønn = options.kjønn ? options.kjønn : navFaker.random.vektetSjanse(0.5) ? Kjønn.KVINNE : Kjønn.MANN;
    }
    return {
        fødselsdato,
        kjønn,
    };
}