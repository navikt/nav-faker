import { Kjønn } from '../fodselsnummer/fodselsnummer';
import NavFaker from '../navfaker';

class Person {

    private faker: NavFaker;

    constructor(faker: NavFaker) {
        this.faker = faker;
    }

    public kjønn(): number {
        return this.faker.random.vektetSjanse(0.5) ? Kjønn.KVINNE : Kjønn.MANN;
    }

}

export default Person;
