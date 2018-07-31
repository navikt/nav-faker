import NavFaker from '../../navfaker';
import { GenererFødselsnummerOptions } from '../fodselsnummer';

export function getConfigOrDefault(navFaker: NavFaker, options?: GenererFødselsnummerOptions) {
    let fødselsdato;
    let kjønn;
    if (!options) {
        fødselsdato = navFaker.dato.mellom(new Date('1900-01-01'), new Date());
        kjønn = navFaker.person.kjønn();
    } else {
        fødselsdato = options.fødselsdato;
        kjønn = options.kjønn ? options.kjønn : navFaker.person.kjønn();
    }
    return {
        fødselsdato,
        kjønn,
    };
}