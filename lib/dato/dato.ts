import NavFaker from '../navfaker';

class Dato {

    private faker: NavFaker;

    constructor(faker: NavFaker) {
        this.faker = faker;
    }

    mellom(fra: Date, til: Date) {
        const fraMilli = Date.parse(fra.toString());
        const dateOffset = this.faker.random.number(Date.parse(til.toString()) - fraMilli);

        return new Date(fraMilli + dateOffset);
    }

}

export default Dato;