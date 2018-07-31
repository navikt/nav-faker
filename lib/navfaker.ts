import Dato from './dato/dato';
import Fødselsnummer from './fodselsnummer/fodselsnummer';
import Person from './person/person';
import Random from './random/random';

class NavFaker {
    public random: Random;
    public fødselsnummer: Fødselsnummer;
    public dato: Dato;
    public person: Person;

    constructor() {
        this.fødselsnummer = new Fødselsnummer(this);
        this.random = new Random();
        this.dato = new Dato(this);
        this.person = new Person(this);
    }

    public seed(seed: string) {
        this.random = new Random(seed);
    }

}

export default NavFaker;
