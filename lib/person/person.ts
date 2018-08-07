import moment = require('moment');

import { Kjønn } from '../fodselsnummer/personIdentifikator';
import NavFaker from '../navfaker';

class Person {

    private faker: NavFaker;

    constructor(faker: NavFaker) {
        this.faker = faker;
    }

    public kjønn(): number {
        return this.faker.random.vektetSjanse(0.5) ? Kjønn.KVINNE : Kjønn.MANN;
    }

    public antallBarn(fødselsdato: Date): number {
        const alder = moment().diff(fødselsdato, 'years');
        return this.kalkulerAntallBarn(alder);
    }

    private kalkulerAntallBarn(foreldresAlder: number) {
        if (foreldresAlder < 18) {
            return 0;
        }
        const maksAntallBarn = foreldresAlder - 18;
        if (this.faker.random.vektetSjanse(0.05)) {
            return this.faker.random.number({min: 6, max: Math.min(maksAntallBarn, 15)});
        } else if (this.faker.random.vektetSjanse(0.75)) {
            return this.faker.random.number(Math.min(maksAntallBarn, 5));
        }
        return 0;
    }

}

export default Person;
