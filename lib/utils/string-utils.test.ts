import { padLeftNumber } from './string-utils';

test('Padder korrekt', () => {
    const paddedString = padLeftNumber(5, 5);

    expect(paddedString).toEqual('00005');
});
