import moment = require('moment');
import NavFaker from '../navfaker';

class Dato {

    private faker: NavFaker;

    constructor(faker: NavFaker) {
        this.faker = faker;
    }

    public mellom(fra: Date, til: Date): Date {
        const fraMilli = Date.parse(fra.toString());
        const dateOffset = this.faker.random.integer(Date.parse(til.toString()) - fraMilli);

        return new Date(fraMilli + dateOffset);
    }

    public forÅrSiden(årSiden: number): Date {
        const datoIKorrektÅr = moment().subtract(årSiden, 'years');
        return this.mellom(
            datoIKorrektÅr.startOf('year').toDate(),
            datoIKorrektÅr.endOf('year').toDate());
    }

}

export default Dato;
