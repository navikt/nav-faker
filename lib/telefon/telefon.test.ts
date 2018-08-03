import navfaker from '../index';

test('Mobiltelefon starter på tallet 9', () => {
    const mobil = navfaker.telefon.mobil();

    const førsteSiffer = mobil.charAt(0);

    expect(mobil).toHaveLength(8);
    expect(førsteSiffer).not.toEqual('0');
    expect(førsteSiffer).not.toEqual('1');
    expect(førsteSiffer).not.toEqual('2');
    expect(førsteSiffer).not.toEqual('3');
    expect(førsteSiffer).not.toEqual('5');
    expect(førsteSiffer).not.toEqual('6');
    expect(førsteSiffer).not.toEqual('7');
    expect(førsteSiffer).not.toEqual('8');
});

test('Jobbtelefon starter ikke på tallet 9 eller 4', () => {
    const mobil = navfaker.telefon.jobb();

    expect(mobil).toHaveLength(8);
    expect(mobil.charAt(0)).not.toEqual('9');
    expect(mobil.charAt(0)).not.toEqual('4');
});
