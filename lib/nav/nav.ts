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
            'Avtalefestet pensjon',
            'Alderspensjon',
            'Grunn-og hjelpestønad',
            'Barnetrygd',
            'Enslig forsørger',
        ];
        return this.faker.random.arrayElement(ytelser);
    }

}

export default Nav;
