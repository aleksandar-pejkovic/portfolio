---
title: "Višejezični sajt sa Nuxt 3 i @nuxtjs/i18n"
description: "Naučite kako da kreirate višejezični sajt u Nuxt 3 koristeći @nuxtjs/i18n modul, sa sadržajem smeštenim u jezički specifične foldere."
date: "21.10.2024."
tags: ["Nuxt 3", "Vue 3", "i18n", "Više jezika", "Markdown", "@nuxtjs/i18n"]
image: "/img/blog/nuxt-i18n/cover.png"
---

# {{ $doc.title }}

![nuxt-i18n cover](/img/blog/nuxt-i18n/cover.png){.content-project-image}

U ovom blog postu ćemo istražiti kako da postavite višejezični sadržaj u **Nuxt 3** koristeći **@nuxtjs/i18n** modul. Konfigurišaćemo sadržaj tako da se koristi iz jezički specifičnih foldera za **srpski** i **engleski** jezik, i prikazaćemo kako Nuxt automatski detektuje i primenjuje jezik na osnovu postavki pregledača korisnika.

Zvaničnu dokumentaciju za **@nuxtjs/i18n** modul možete pronaći na sledećem linku:

https://nuxt.com/modules/i18n

## Preduslovi

Pre nego što počnemo, uverite se da imate sledeće instalirano:

- **Node.js** (v14 ili novija verzija)
- **Nuxt 3**
- **@nuxtjs/i18n** modul

## Postavljanje Projekta

Prvo, kreirajte novi Nuxt 3 projekat:

```bash
npx nuxi@latest init moj-nuxt-i18n-sajt
cd moj-nuxt-i18n-sajt
```

Zatim dodajte **@nuxtjs/i18n** modul:

```bash
npx nuxi@latest module add @nuxtjs/i18n
```

### Konfiguracija za **@nuxtjs/i18n**

Sledeći korak je konfiguracija u vašem `nuxt.config.ts` fajlu. Dodajte sledeći kod:

```js
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    // Lista podržanih jezika
    locales: [
      { code: 'sr', name: 'Srpski', iso: 'sr-RS', file: 'sr.json' },
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' }
    ],
    // Podrazumevani jezik sajta
    defaultLocale: 'sr',

    // Direktorijum sa prevodima
    langDir: 'locales/',

    // Strategija rutiranja
    strategy: 'prefix', // Dodaje prefiks jezika u URL, npr. /en/about ili /sr/about

    // Automatsko prebacivanje jezika na osnovu postavki pregledača korisnika
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'sr',
    }
  }
})
```

## Organizacija višejezičnog sadržaja u `content/` folderu

Sadržaj možete organizovati u foldere specifične za svaki jezik. Na primer:

```
content/
├── en/
│   └── blog/
│       └── my-first-post.md
├── sr/
    └── blog/
        └── my-first-post.md
```

Ovde, Nuxt će automatski obrađivati putanje na osnovu jezika pregledača korisnika ili jezika koji korisnik izabere na sajtu. Ako korisnik poseti **`/en/blog/my-first-post`**, prikazaće se sadržaj na engleskom jeziku, dok će posetom **`/sr/blog/my-first-post`** biti prikazan sadržaj na srpskom jeziku.

### Detekcija jezika pregledača

Po podrazumevanoj postavci, i18n modul automatski detektuje jezik pregledača korisnika i učitava odgovarajući sadržaj. Ako je pregledač podešen na engleski, Nuxt će prikazati englesku verziju sajta. Ako je podešen na srpski, prikazaće se srpska verzija.

## Korišćenje **@nuxt/content** za prikazivanje višejezičnog sadržaja

**@nuxt/content** modul koristi dinamičke rute i pretražuje sadržaj na osnovu putanja u **content/** folderu. Kombinovanjem sa **@nuxtjs/i18n**, možete jednostavno upravljati različitim jezicima unutar vaših Markdown fajlova.

### Kreiranje Markdown fajlova

Unutar **content/** foldera, kreirajte jezički specifične verzije vaših postova:

- **content/en/blog/my-first-post.md**
- **content/sr/blog/my-first-post.md**

Svaka verzija sadrži preveden sadržaj na odgovarajući jezik.

### Prikazivanje sadržaja sa **`<ContentDoc />`**

Da bi se sadržaj prikazao dinamički na osnovu jezika, koristite ugrađenu **`<ContentDoc />`** komponentu. Nuxt će se pobrinuti za preostalo.

Unutar foldera **`pages/blog/[slug].vue`**, dodajte sledeći kod za prikaz sadržaja:

```vue
<template>
  <div>
    <ContentDoc />
  </div>
</template>
```

Ovaj kod automatski prikazuje sadržaj iz **content/** foldera u zavisnosti od rute i izabranog jezika.

## Zaključak

Kombinovanjem **Nuxt 3**, **@nuxtjs/i18n** i **@nuxt/content** modula možete lako kreirati višejezični sajt koji dinamički učitava sadržaj na osnovu jezika korisnika ili jezika pregledača. Ovaj pristup omogućava jednostavno upravljanje globalnim sadržajem i poboljšava korisničko iskustvo za različite jezičke grupe.

---

Aleksandar Pejković  
**Web developer**
