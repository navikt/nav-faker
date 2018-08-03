import NavFaker from '../navfaker';
import { replaceSymbolWithNumber } from '../utils/string-utils';

class Telefon {

    private faker: NavFaker;

    constructor(faker: NavFaker) {
        this.faker = faker;
    }

    public mobil(): string {
        const muligeFørsteSiffere = ['4', '9'];
        const førsteSiffer = muligeFørsteSiffere[this.faker.random.number(muligeFørsteSiffere.length - 1)];
        return replaceSymbolWithNumber(`${førsteSiffer}#######`, this.faker);
    }

    public jobb(): string {
        const muligeFørsteSiffere = ['1', '2', '3', '5', '6', '7', '8'];
        const førsteSiffer = muligeFørsteSiffere[this.faker.random.number(muligeFørsteSiffere.length - 1)];
        return replaceSymbolWithNumber(`${førsteSiffer}#######`, this.faker);
    }

}

export default Telefon;
