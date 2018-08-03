import NavFaker from '../navfaker';

export function padLeftNumber(tall: number, width: number) {
    return padLeft(tall.toString(), width, '0');
}

export function padLeft(streng: string, width: number, symbol: string) {
    if (streng.length >= width) {
        return streng;
    }
    const leadingSymbol = symbol.length > 0 ? symbol.charAt(0) : ' ';

    return leadingSymbol.repeat(width - streng.length) + streng;
}

export function replaceSymbolWithNumber(streng: string, navfaker: NavFaker): string {
    return streng.split('').map((char) =>
        char === '#' ? String(navfaker.random.number(9)) : char,
    ).join('');
}
