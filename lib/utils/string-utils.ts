
export function padLeftNumber(number: number, width: number) {
    return padLeft(number.toString(), width, '0');
}

export function padLeft(streng: string, width: number, symbol: string) {
    if (streng.length >= width) {
        return streng;
    }
    const leadingSymbol = symbol.length > 0 ? symbol.charAt(0) : ' ';

    return leadingSymbol.repeat(width - streng.length) + streng;
}