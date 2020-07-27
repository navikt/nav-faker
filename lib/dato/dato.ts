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
        const start = new Date();
        start.setFullYear(start.getFullYear() - årSiden, 0, 1);
        const end = new Date();
        end.setFullYear(end.getFullYear() - årSiden, 11, 31);

        return this.mellom(start, end);
    }

}

export default Dato;
