import navfaker from '../index';

describe('fornavn', () => {

    test('for gutt', () => {
        const navn = navfaker.navn.fornavn(1);

        expect(navn.length).toBeGreaterThan(0);
    });
    test('for jente', () => {

        const navn = navfaker.navn.fornavn(0);
        expect(navn.length).toBeGreaterThan(0);
    });

    test('uten angitt kjønn', () => {
        const navn = navfaker.navn.fornavn();

        expect(navn.length).toBeGreaterThan(0);
    });
});
