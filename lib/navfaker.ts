import Dato from './dato/dato';
import Fødselsnummer from './fodselsnummer/fodselsnummer';
import Person from './person/person';
import Random from './random/random';
import Telefon from './telefon/telefon';
import Nav from './nav/nav';

class NavFaker {
    public random: Random;
    public fødselsnummer: Fødselsnummer;
    public dato: Dato;
    public person: Person;
    public telefon: Telefon;
    public nav: Nav;

    constructor() {
        this.fødselsnummer = new Fødselsnummer(this);
        this.random = new Random();
        this.dato = new Dato(this);
        this.person = new Person(this);
        this.telefon = new Telefon(this);
        this.nav = new Nav(this);
    }

    public seed(seed: string) {
        this.random = new Random(seed);
    }

}

export default NavFaker;
