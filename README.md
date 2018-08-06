# nav-faker [![npm version](https://badge.fury.io/js/nav-faker.svg)](https://badge.fury.io/js/nav-faker) [![Build Status](https://travis-ci.org/navikt/nav-faker.svg?branch=master)](https://travis-ci.org/navikt/nav-faker) [![Maintainability](https://api.codeclimate.com/v1/badges/e32a0e4aee01f71e08f6/maintainability)](https://codeclimate.com/github/navikt/nav-faker/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e32a0e4aee01f71e08f6/test_coverage)](https://codeclimate.com/github/navikt/nav-faker/test_coverage)

nav-faker er et lite bibliotek som lar deg generere opp norske testdata. Biblioteket er under utvikling.

Planen er å implementere støtte for generering av tilfeldige:

* Fødselsnummere / d-nummere
* Adresser
* Navn
* Tall og datoer

## Install

``` npm install --save nav-faker ```

## Usage

### React / Javascript

```
import navfaker from 'nav-faker/dist/index';

navfaker.fødselsnummer.generer(); // => 10108000398

```

## Test det ut

https://repl.it/@Quist/nav-faker-demo


## API

### Summary

nav-faker har følgende moduler:


* dato
* fødselsnummer
* random
* person
* telefon

### Dato

```
    mellom(fra: Date, til: Date): Date;
    forÅrSiden(årSiden: number): Date;
```

### Fødselsnummer

```
    generer(fødselsdato?: Date, kjønn?: number): string;
    dnummer(fødselsdato?: Date, kjønn?: number): string;
    myndig(kjønn?: number): string;
    getFødselsdato(fødselsnummer: string): Date;
```

### Person

```
    kjønn(): number;
    antallBarn(fødselsdato: Date): number;
```

### Random

```
    number(config?: NumberConfig | number): number;
    vektetSjanse(vekt: number): boolean;
```

### Telefon

```
    mobil(): string;
    jobb(): string;
```


## Bidra?

Kom gjerne med innspill, ønsker og pull-requester!

### Oppsett

Installer dependencies: `yarn `

Bygg og linting med: `yarn build `

### Test

`yarn test`

### Committe 

Vi bruker verktøyet [semantic-release](https://github.com/semantic-release/semantic-release) for å bestemme når og hvilken versjon som skal publiseres til NPM. Verktøyet analysere commit-meldinger for å bestemme om patch, minor eller major versjon skal publiseres.

### Publisering til NPM

Når kode merges inn i master, analyseres semantic-release commit-meldingene siden forrige publish til NPM. Basert på innholdet i meldingene, bestemmes om og isåfall hvordan versjon som skal publiseres.


## Filosofi

nav-faker baserer seg på [marak/faker](https://github.com/Marak/faker.js). Mockingen deles inn i moduler, .f.eks fødselsnummer, dato og person. I utgangspunktet er planen å kun støtte å generere mock-data, _ikke_ et util bibliotek.  


## Henvendelser

Spørsmål knyttet til koden eller prosjektet kan rettes mot:

* Daniel Winsvold, daniel.winsvold@nav.no
* Jan-Eirik B. Nævdal, jan.eirik.b.navdal@nav.no
* Joakim Lindquister, joakim.lindquister@nav.no
* Jørund Amsen, jorund.amsen@nav.no
* Ketil S. Velle, ketil.s.velle@nav.no
* Richard Borge, richard.borge@nav.no

### For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #team-oppfølging.
