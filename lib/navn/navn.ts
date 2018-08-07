import {Kjønn} from '../fodselsnummer/fodselsnummer';
import navfaker from '../index';
import NavFaker from '../navfaker';
import guttenavn from './data/guttenavn';
import jentenavn from './data/jentenavn';

class Navn {

    private navfaker: NavFaker;

    constructor(faker: NavFaker) {
        this.navfaker = faker;
    }

    public fornavn(kjønn?: number): string {
        return this.getFornavnForKjønn(kjønn !== undefined ? kjønn : this.navfaker.person.kjønn());
    }

    private getFornavnForKjønn(kjønn: number) {
        if (kjønn === Kjønn.MANN) {
            return navfaker.random.arrayElement(guttenavn);
        } else {
            return navfaker.random.arrayElement(jentenavn);
        }
    }

}

export default Navn;
