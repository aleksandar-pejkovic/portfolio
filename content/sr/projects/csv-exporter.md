---
title: "CSV Exporter"
description: "Test projekat koji koristi Apache Camel i Spring Boot za backend integraciju i Angular za frontend korisnički interfejs."
image: "/img/projects/csv-exporter/code.jpg"
---

# Projekat sa Apache Camel, Spring Boot i Angular

![csv exporter code sample](/img/projects/csv-exporter/code.jpg){.content-project-image}

Ovaj projekat je razvijen kao test aplikacija sa ciljem integracije različitih sistema koristeći **Apache Camel** i **Spring Boot** za backend i **Angular** za frontend deo aplikacije. **Apache Camel** je korišćen za procesiranje i integraciju poruka između sistema, dok je **Spring Boot** omogućio stabilnu i skalabilnu platformu za backend operacije. **Angular** je korišćen za razvoj modernog web korisničkog interfejsa koji omogućava interakciju sa podacima.

- **GitHub**:  [Navigator exporter (Apache Camel + Spring Boot)](https://github.com/aleksandar-pejkovic/navigator-data-exporter){target="_blank"}

- **GitHub**: [Navigator client (Angular.js)](https://github.com/aleksandar-pejkovic/navigator-data-client){target="_blank"}

## Arhitektura sistema

Projekat je razvijen sa jasnom separacijom između backend i frontend dela, omogućavajući fleksibilnost, skalabilnost i jednostavno održavanje aplikacije.

- **Backend**: Backend je izgrađen koristeći **Apache Camel** za integraciju i **Spring Boot** za osnovu aplikacije. **Apache Camel** omogućava rutiranje, procesiranje i transformaciju podataka iz različitih izvora, dok **Spring Boot** olakšava upravljanje REST API-jem i poslovnom logikom. Camel integracije su implementirane kroz Spring Boot rutine, omogućavajući jednostavnu obradu podataka i povezivanje sa različitim sistemima.
  
- **Frontend**: Frontend je razvijen koristeći **Angular**, moderan frontend okvir za izradu dinamičkih web aplikacija. Angular omogućava razvoj single-page aplikacija (SPA), pružajući korisnicima brze i responzivne interfejse.

## Funkcionalnosti projekta

1. **Integracija sistema sa Apache Camel i Spring Boot**:
   - **Rutiranje poruka**: **Apache Camel** koristi definisane rute za slanje, primanje i transformaciju poruka između različitih sistema, što omogućava automatizaciju poslovnih procesa.
   - **REST API**: **Spring Boot** pruža REST API endpoint-e koji služe kao interfejs između frontend-a i backend-a, omogućavajući Angular aplikaciji da pristupi podacima i šalje zahteve ka backendu.
   - **Transformacija podataka**: Camel rute omogućavaju transformaciju podataka iz jednog formata u drugi, olakšavajući integraciju sa različitim sistemima.
<br><br/>

2. **Korisnički interfejs sa Angular-om**:
   - **Pregled i upravljanje podacima**: Angular omogućava korisnicima da pregledaju i upravljaju podacima koje backend šalje putem API-a. Korisnici mogu slati zahteve i dobijati podatke u realnom vremenu zahvaljujući dinamičkoj prirodi Angular SPA aplikacija.
   - **Responzivni dizajn**: Aplikacija je dizajnirana tako da bude dostupna i funkcionalna na različitim uređajima, od desktop računara do mobilnih telefona.
<br><br/>

3. **Integracija i obrada podataka**:
   - **Multi-source podrška**: Korišćenjem Apache Camel-a, aplikacija može integrisati podatke iz različitih izvora, poput baza podataka, web servisa, fajlova i drugih eksternih sistema.
   - **Monitoring i logging**: Spring Boot omogućava lako praćenje rada aplikacije kroz logove i metrike, dok Camel pruža napredne funkcije za nadgledanje integracionih tokova.

## Tehnologije korišćene u projektu

### Backend:
- **Java**: Jezgro aplikacije za poslovnu logiku.
- **Spring Boot**: Okvir za razvoj backend-a i izradu REST API-ja.
- **Apache Camel**: Integracioni alat za rutiranje i transformaciju podataka.
- **PostgresSQL**: Relaciona baza podataka za skladištenje poslovnih podataka.

### Frontend:
- **Angular**: Frontend framework za izradu dinamičkih i responzivnih korisničkih interfejsa.
- **TypeScript**: JavaScript superset korišćen za razvoj Angular aplikacija.

### Deploy i skalabilnost:
- **Docker**: Kontejnerizacija aplikacije za jednostavno postavljanje i skaliranje.

## Zaključak

Ovaj projekat demonstrira moćne integracione mogućnosti **Apache Camel-a** u kombinaciji sa **Spring Boot** platformom, dok **Angular** omogućava izradu dinamičkih, korisnički orijentisanih interfejsa. Projekat je idealan za kompanije koje žele da povežu različite sisteme i upravljaju kompleksnim poslovnim procesima kroz jednu aplikaciju.

---

Aleksandar Pejković  
**Web developer**
