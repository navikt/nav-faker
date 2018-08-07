import NavFaker from '../navfaker';
import { Kjønn } from '../personidentifikator/personIdentifikator';
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
            return this.navfaker.random.arrayElement(guttenavn);
        } else {
            return this.navfaker.random.arrayElement(jentenavn);
        }
    }

}

export default Navn;
