---
title: "BudgetPlus"
description: "Sveobuhvatna aplikacija za upravljanje budžetom za korisnike budžetskih sredstava."
image: "/img/projects/budgetplus/landing-page.png"
---

# BudgetPlus

<img src="/img/projects/budgetplus/landing-page.png" alt="budget plus landing page" class="content-project-image">

**BudgetPlus** je sveobuhvatna softverska aplikacija namenjena institucijama koje upravljaju budžetima, poput škola, javnih institucija i nevladinih organizacija. Sistem omogućava automatizaciju finansijskih tokova, kreiranje izveštaja, budžetiranje i analizu finansijskih performansi, čime se značajno smanjuje administrativni teret za korisnike.

## Arhitektura sistema

**BudgetPlus** je razvijen kao **SaaS** (Software as a Service) aplikacija sa zasebnim backend i frontend delom.

- **Backend**: Napisan je u **Java** programskom jeziku uz upotrebu **Spring Boot** okvira. Backend je odgovoran za rukovanje poslovnom logikom, rad sa bazom podataka i upravljanje autentifikacijom i autorizacijom korisnika.
- **Frontend**: Frontend koristi **Vue.js** i **Nuxt.js** okvire, koji pružaju modularan i dinamičan korisnički interfejs sa optimalnim performansama i odličnim korisničkim iskustvom.

## Backend funkcionalnosti

1. **Autentifikacija i autorizacija**: Implementiran je **OAuth2** sistem za autentifikaciju korisnika putem JWT (JSON Web Token), sa različitim nivoima pristupa (administrator, računovođa, korisnik).
   - **Role-based Access Control (RBAC)**: Prava pristupa su definisana na osnovu uloga korisnika, gde administratori imaju mogućnost potpunog upravljanja aplikacijom, dok su funkcionalnosti za obične korisnike ograničene.
   - **Podrška za više organizacija**: Svaka organizacija ima svoje korisnike, transakcije i budžet, omogućavajući lako proširenje sistema na različite institucije.
<br><br/>

2. **Upravljanje finansijama**:
   - **Vođenje prihoda i rashoda**: Korisnici mogu evidentirati sve prihode i rashode, uz automatsko generisanje bilansa.
   - **Transakcioni moduli**: Aplikacija omogućava unos i praćenje transakcija po različitim kategorijama, kao što su operativni troškovi, kapitalne investicije, grantovi i donacije.
   - **Viševalutno poslovanje**: Sistem podržava rad sa više valuta, omogućavajući korisnicima da unose i konvertuju transakcije u različitim valutama.
<br><br/>

3. **Budžetiranje i planiranje**:
   - **Kreiranje budžeta**: Administratori mogu definisati budžete za određene vremenske periode (godišnje, kvartalne), kao i po sektorima ili projektima unutar organizacije.
   - **Praćenje izvršenja budžeta**: Sistem automatski generiše statistiku o tome koliko je sredstava potrošeno u odnosu na planirani budžet, uz mogućnost alarmiranja kada potrošnja pređe definisane granice.
   - **Predikcija troškova**: Sistem analizira prethodne podatke i predlaže optimizacije za buduće troškove na osnovu potrošnje.
<br><br/>

4. **Izveštavanje**:
   - **Generisanje finansijskih izveštaja**: Sistem omogućava generisanje različitih vrsta izveštaja, kao što su bilans stanja, bilans uspeha, kao i analitički izveštaji po kategorijama.
   - **Export u PDF/Excel**: Korisnici mogu izvoziti izveštaje u PDF ili Excel formatu radi dalje analize ili arhiviranja.
   - **Vizualizacija podataka**: Aplikacija koristi grafičke prikaze i dijagrame za bolje praćenje i analizu troškova i prihoda.

## Frontend funkcionalnosti

1. **Korisnički interfejs (UI)**:
   - **Intuitivan dizajn**: Frontend je dizajniran s fokusom na jednostavnost i korisničko iskustvo, sa jasnim navigacionim menijima i karticama za različite funkcionalnosti.
   - **Responzivni dizajn**: Aplikacija je optimizovana za sve uređaje (računare, tablete, mobilne telefone) korišćenjem fleksibilnog layout-a i medijskih upita.
   - **Real-time notifikacije**: Korisnici dobijaju obaveštenja o važnim događajima, poput prekoračenja budžeta, novih transakcija ili promena u izveštajima.
<br><br/>

2. **Upravljanje korisnicima**:
   - **Registracija i login**: Omogućena je jednostavna registracija korisnika i prijava u sistem, uz opciju resetovanja lozinke putem email-a.
   - **Upravljanje profilima**: Korisnici mogu ažurirati svoje lične podatke, uloge i postavke na osnovu prava pristupa.
<br><br/>

3. **Pregled i unos transakcija**:
   - **Interaktivni obrasci za unos**: Forma za unos transakcija omogućava korisnicima da dodaju, uređuju i brišu transakcije u jednostavnom interfejsu.
   - **Filtar i pretraga**: Svi podaci su pretraživi, a korisnici mogu koristiti filtere za lakši pregled transakcija prema datumu, kategoriji, valuti, i slično.
<br><br/>

4. **Analitički alati**:
   - **Prikaz grafikona**: Aplikacija vizuelno prikazuje podatke o troškovima, prihodima i budžetima koristeći interaktivne grafikone i dijagrame.
   - **Simulacije budžeta**: Korisnici mogu simulirati različite scenarije budžeta na osnovu istorijskih podataka i očekivanih prihoda/troškova.

## Tehnologije korišćene u projektu

### Backend:
- **Java**: Jezgro aplikacije za obradu poslovne logike.
- **Spring Boot**: Okvir za izradu REST API-a, upravljanje sesijama i sigurnošću.
- **MariaDB**: Relaciona baza podataka za skladištenje transakcija, budžeta i korisničkih podataka.
- **Hibernate**: ORM za komunikaciju sa bazom podataka.
- **JWT**: Za autentifikaciju i autorizaciju korisnika.

### Frontend:
- **Vue.js**: Frontend JavaScript okvir za izradu dinamičkih korisničkih interfejsa.
- **Nuxt.js**: Okvir za statički generisan i SSR (server-side rendering) frontend.
- **Pinia**: Jednostavno dijeljenje podataka između komponenata.
- **Tailwind CSS**: Koristi se za stilizovanje aplikacije sa responzivnim dizajnom.

### Deploy i skalabilnost:
- **Docker**: Aplikacija je upakovana u Docker kontejnere, što omogućava lako testiranje, deployment i skaliranje.
- **CI/CD**: Automatski deployment putem GitHub Actions.

## Zaključak

**BudgetPlus** je kompletan alat koji pomaže organizacijama u efikasnijem upravljanju budžetima i finansijama. Kombinacija modernih tehnologija i intuitivnog korisničkog interfejsa omogućava jednostavnu integraciju sa postojećim sistemima, dok fleksibilnost arhitekture omogućava lako prilagođavanje različitim poslovnim potrebama.

---

Aleksandar Pejković  
**Web developer**
