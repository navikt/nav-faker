import  seedrandom = require('seedrandom');

export interface NumberConfig {
    min: number;
    max: number;
}

class Random {

    private randomGenerator: seedrandom.prng;

    constructor(seed?: string) {
        this.randomGenerator = seedrandom(seed);
    }

    public number(config: NumberConfig | number) {
        let min = 0;
        let max = 0;
        if (! (typeof config === 'number')) {
            min = config.min;
            max = config.max;
        } else {
            max = config;
        }
        return this.randomNumber(min, max);
    }

    public vektetSjanse(vekt: number) {
        return this.randomGenerator.double() <= vekt;
    }

    // The maximum is inclusive and the minimum is inclusive
    private randomNumber(min: number, max: number) {
        min = Math.ceil(min);

        max = Math.floor(max);
        return Math.floor(this.randomGenerator() * (max - min + 1)) + min;
    }

}

export default Random;
