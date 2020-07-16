# nav-faker [![npm version](https://badge.fury.io/js/nav-faker.svg)](https://badge.fury.io/js/nav-faker) [![Build status](https://github.com/navikt/nav-faker/workflows/Test,%20build%20and%20publish/badge.svg?branch=master)](https://github.com/navikt/nav-faker/actions?query=workflow%3A%22Test%2C+build+and+publish%22)

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

nav-faker er skrevet i typescript og kompileres ned til javascript. Dette kan da dras inn som en avhengighet av andre applikasjoner. nav-faker er satt opp med et CI bygg vha github actions.

### Oppsett

Installer dependencies: `yarn `

Bygg og linting med: `yarn build `

### Test

`yarn test`

### Committe 

Vi bruker verktøyet [semantic-release](https://github.com/semantic-release/semantic-release) for å bestemme når og hvilken versjon som skal publiseres til NPM. Verktøyet analysere commit-meldinger for å bestemme om patch, minor eller major versjon skal publiseres.

Du _må_ derfor følgende gjeldene [commit-message convention](https://github.com/conventional-changelog/conventional-changelog).
Man kan enten kjøre `yarn commit`, eller innstallere [commitizen](https://github.com/commitizen/cz-cli) globalt via `yarn global add commitizen` og deretter kjøre `git cz`

Når du ønsker å commite: `yarn commit `

### Publisering til NPM

Når kode merges inn i master, analyseres semantic-release commit-meldingene siden forrige publish til NPM. Basert på innholdet i meldingene, bestemmes om og isåfall hvordan versjon som skal publiseres.


## Filosofi

nav-faker baserer seg på [marak/faker](https://github.com/Marak/faker.js). Mockingen deles inn i moduler, .f.eks fødselsnummer, dato og person. I utgangspunktet er planen å kun støtte å generere mock-data, _ikke_ et util bibliotek.  


## Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles via issues, evt via intern slack på #personoversikt-intern
