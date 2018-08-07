import  seedrandom = require('seedrandom');

class Random {

    private randomGenerator: seedrandom.prng;

    constructor(seed?: string) {
        this.randomGenerator = seedrandom(seed);
    }

    public integer(max?: number, min?: number) {
        let parsedMin = 0;
        let parsedMax =  Number.MAX_SAFE_INTEGER;

        if (min !== undefined) {
            parsedMin = min;
        }
        if (max !== undefined) {
            parsedMax = max;
        }
        return this.randomNumber(parsedMin, parsedMax);
    }

    public vektetSjanse(vekt: number) {
        return this.randomGenerator.double() <= vekt;
    }

    public arrayElement(elements: any[]) {
        return elements[this.integer(elements.length - 1)];
    }

    // The maximum is inclusive and the minimum is inclusive
    private randomNumber(min: number, max: number) {
        min = Math.ceil(min);

        max = Math.floor(max);
        return Math.floor(this.randomGenerator() * (max - min + 1)) + min;
    }

}

export default Random;
