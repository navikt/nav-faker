import Random from './random';
import Fødselsnummer from './fodselsnummer/fodselsnummer';
import Dato from './dato/dato';

class NavFaker {
    random: Random;
    fødselsnummer: Fødselsnummer;
    dato: Dato;

    constructor() {
        this.fødselsnummer = new Fødselsnummer(this);
        this.random = new Random();
        this.dato = new Dato(this);
    }

    seed(seed: string) {
        this.random = new Random(seed);
    }

}

export default NavFaker;