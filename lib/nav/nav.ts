import NavFaker from '../navfaker';

class Nav {

    private faker: NavFaker;

    constructor(faker: NavFaker) {
        this.faker = faker;
    }

    public ytelse(): string {
        const ytelser = [
            'Foreldrepenger',
            'Dagpenger',
            'Arbeidsavklaringspenger',
            'Sykepenger',
        ];
        return this.faker.random.arrayElement(ytelser);
    }

}

export default Nav;
