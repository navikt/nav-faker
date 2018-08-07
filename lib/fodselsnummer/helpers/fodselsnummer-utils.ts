export function beregnKontrollsiffer1(fodselsnummer: string) {
    const kontrollSiffer1Multiplikatorer = [3, 7, 6, 1, 8, 9, 4, 5, 2];
    return beregnKontrollsiffer(fodselsnummer, kontrollSiffer1Multiplikatorer);
}

export function beregnKontrollsiffer2(fodselsnummer: string): number {
    const kontrollSiffer2Multiplikatorer = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    return beregnKontrollsiffer(fodselsnummer, kontrollSiffer2Multiplikatorer);
}

function beregnKontrollsiffer(fodselsnummer: string, multiplikatorTabell: number[]) {
    let sum = 0;
    for (let i = 0; i < multiplikatorTabell.length; i++) {
        sum += parseInt(fodselsnummer[i], 10) * multiplikatorTabell[i];
    }
    const rest = sum % 11;

    if (rest === 0) { return 0; }
    return 11 - rest;
}

export function erDnummer(fødselsnummer: string) {
    const dag = Number(fødselsnummer.substring(0, 2));
    return dag > 40 && dag <= 71;
}

export function erGyldigFødselsnummer(fødselsnummer: string) {
    if (fødselsnummer.length !== 11) {
        return false;
    }

    const k1 = Number(fødselsnummer.charAt(9));
    const k2 = Number(fødselsnummer.charAt(10));
    if (k1 !== beregnKontrollsiffer1(fødselsnummer)) {
        return false;
    }
    if (k2 !== beregnKontrollsiffer2(fødselsnummer)) {
        return false;
    }
    return true;
}
