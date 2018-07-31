# nav-faker [![Maintainability](https://api.codeclimate.com/v1/badges/e32a0e4aee01f71e08f6/maintainability)](https://codeclimate.com/github/navikt/nav-faker/maintainability)

nav-faker er et lite bibliotek som lar deg generere opp norske testdata. Biblioteket er under utvikling.

Planen er å støtte å generere data som:

* Fødselsnummere
* Adresser

## Install

``` npm install --save nav-faker ```

## Usage

### React / Javascript

```
import navfaker from 'nav-faker/dist/index';

navfaker.fødselsnummer.generer();

```


## API

### Summary

nav-faker har følgende moduler:

* random
* fødselsnummer


### Fødselsnummer

```
    public generer(providedConfig?: GenererConfig): string;

    public getFødselsdato(fødselsnummer: string): Date;

```

### Random

* vektetSjanse
* number


## Bidra?

Kom gjerne med innspill, ønsker og pull-requester!


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
