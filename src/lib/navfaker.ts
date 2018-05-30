import Random from './random';
import Fødselsnummer from './fødselsnummer/fødselsnummer';

class NavFaker {
    random: Random;
    fødselsnummer: Fødselsnummer;

    constructor() {
        this.fødselsnummer = new Fødselsnummer(this);
        this.random = new Random();
    }

    seed(seed: string) {
        this.random = new Random(seed);
    }

}

export default NavFaker;