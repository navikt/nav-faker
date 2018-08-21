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

```javascript
import navfaker from 'nav-faker/dist/index';

navfaker.personIdentifikator.fødselsnummer(); // => 10108000398

```

## Test det ut

https://repl.it/@Quist/nav-faker-demo


## API

### Summary

nav-faker har følgende moduler:


* dato
* personIdentifikator
* random
* person
* telefon

### Dato

```typescript
    mellom(fra: Date, til: Date): Date;
    forÅrSiden(årSiden: number): Date;
```

### PersonIdentifikator

```typescript
    fødselsnummer(fødselsdato?: Date, kjønn?: number): string;
    dnummer(fødselsdato?: Date, kjønn?: number): string;
    myndigFødselsnummer(kjønn?: number): string;
    getFødselsdato(fødselsnummer: string): Date;
```

### Person

```typescript
    kjønn(): number;
    antallBarn(fødselsdato: Date): number;
```

### Random

```typescript
    number(max?: number, min?: number): number;
    vektetSjanse(vekt: number): boolean;
```

### Telefon

```typescript
    mobil(): string;
    jobb(): string;
```


## Bidra?

Kom gjerne med innspill, ønsker og pull-requester!

nav-faker er skrevet i typescript og kompileres ned til javascript. Dette kan da dras inn som en avhengighet av andre applikasjoner. nav-faker er satt opp med et CI bygg på [travis](https://travis-ci.org/navikt/nav-faker/).

### Oppsett

Installer dependencies: `yarn `

Bygg og linting med: `yarn build `

### Test

`yarn test`

### Committe 

Vi bruker verktøyet [semantic-release](https://github.com/semantic-release/semantic-release) for å bestemme når og hvilken versjon som skal publiseres til NPM. Verktøyet analysere commit-meldinger for å bestemme om patch, minor eller major versjon skal publiseres.

Du _bør_ derfor følgende gjeldene [commit-message convention](https://travis-ci.org/navikt/nav-faker/). For enkelhetskyld kan du installere [commitizen](https://github.com/commitizen/cz-cli) som interaktivt hjelper deg å skrive commit-meldinger: `yarn global add commitizen`

Når du ønsker å commite: `yarn commit `

### Publisering til NPM

Når kode merges inn i master, analyseres semantic-release commit-meldingene siden forrige publish til NPM. Basert på innholdet i meldingene, bestemmes om og isåfall hvordan versjon som skal publiseres.


## Filosofi

nav-faker baserer seg på [marak/faker](https://github.com/Marak/faker.js). Mockingen deles inn i moduler, .f.eks fødselsnummer, dato og person. I utgangspunktet er planen å kun støtte å generere mock-data, _ikke_ et util bibliotek.  


## Henvendelser

Spørsmål knyttet til koden eller prosjektet kan rettes mot:

* Daniel Winsvold, daniel.winsvold@nav.no
* Jan-Eirik B. Nævdal, jan.eirik.b.navdal@nav.no
* Joakim Lindquister, joakiml@gmail.no
* Jørund Amsen, jorund.amsen@nav.no
* Ketil S. Velle, ketil.s.velle@nav.no
* Richard Borge, richard.borge@nav.no

### For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #team-oppfølging.
