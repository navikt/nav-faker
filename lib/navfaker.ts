import Dato from './dato/dato';
import Fødselsnummer from './fodselsnummer/fodselsnummer';
import Random from './random';

class NavFaker {
    public random: Random;
    public fødselsnummer: Fødselsnummer;
    public dato: Dato;

        constructor() {
        this.fødselsnummer = new Fødselsnummer(this);
        this.random = new Random();
        this.dato = new Dato(this);
    }

    public seed(seed: string) {
        this.random = new Random(seed);
    }

}

export default NavFaker;
