---
title: "Napredne funkcije sa Nuxt 3 i @nuxt/content"
description: "Istražite kako koristiti dinamičke podatke, Vue komponente i treće strane API-je u Nuxt 3 koristeći Markdown."
date: "21.10.2024."
tags: ["Nuxt 3", "Vue 3", "API", "Komponente", "Markdown", "@nuxt/content"]
image: "/img/blog/nuxt-content/cover.png"
---

# {{ $doc.title }}

<img src="/img/blog/nuxt-content/cover.png" alt="nuxt-content cover" class="content-project-image">

Dobrodošli u vaš prvi blog post! U ovom vodiču ćemo istražiti kako da kreirate blog post koristeći **Nuxt 3** i **@nuxt/content** modul. Uključićemo primere koda i slike kako bi post bio zanimljiviji.

Sve vezano za Nuxt content možete pronaći na zvaničnom sajtu:

https://content.nuxt.com/

## Preduslovi

Pre nego što počnemo, uverite se da imate sledeće instalirano:

- **Node.js** (v14 ili novija verzija)
- **Nuxt 3**

## Postavljanje Projekta

Prvo, kreirajte novi Nuxt 3 content projekat:

```bash
npx nuxi@latest init moj-nuxt-blog -t content
cd moj-nuxt-blog
```

Alternativno, u svakom trenutku možete dodati content modul u postojeći projekat:
```bash
npx nuxi@latest module add content
```

Zatim, dodajte @nuxt/content u delu modules u svoj nuxt.config.ts:

```js
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    // ... options
  }
})
```

## Korišćenje @nuxt/content modula za biranje sadržaja na osnovu putanje
@nuxt/content modul automatski mapira fajlove iz **content/** foldera na rute. To znači da svaki Markdown fajl koji smeštaš u ovaj folder postaje dostupna stranica na sajtu sa odgovarajućom URL putanjom.

Kako @nuxt/content bira sadržaj?
Svaki Markdown fajl u content/ folderu automatski postaje ruta na sajtu. Na primer, ako imaš fajl u folderu **content/blog/my-post.md**, ta stranica će biti dostupna na ruti **/blog/my-post**.

Nuxt.js koristi dinamičke rute i content query kako bi prikazao odgovarajući sadržaj.

### Korak 1: Kreiranje Markdown fajlova
Unutar foldera **content/blog/** kreiraj Markdown fajl **my-first-post.md**

### Korak 2: Kreiranje dinamičke rute u Nuxt projektu

**`<ContentDoc />`** je ugrađena komponenta iz @nuxt/content modula koja automatski prikazuje sadržaj na osnovu putanje.

Kada korisnik poseti rutu kao što je **/blog/my-first-post**, Nuxt automatski prikazuje sadržaj fajla **content/blog/my-first-post.md** koristeći **`<ContentDoc />`**.
Ovaj pristup pojednostavljuje rad sa dinamičkim sadržajem, jer @nuxt/content modul prepoznaje Markdown fajlove i automatski ih renderuje na osnovu URL putanje.
Unutar foldera **pages/blog/** kreiraj novu komponentu **`[slug]`.vue** koja predstavlja promenljivi deo URL putanje, a zatim dodaj sledeći kod za prikaz sadržaja Markdown fajlova:

```vue
<!-- pages/blog/[slug].vue -->
<template>
  <div>
    <ContentDoc />
  </div>
</template>
```
---

## Napredne funkcije sa Nuxt 3 i @nuxt/content

Sada ćemo istražiti neke napredne funkcije **Nuxt 3** i **@nuxt/content** modula, kao što je korišćenje Vue komponenti sa dinamičkim podacima i integracija API-ja trećih strana direktno u vaše Markdown fajlove. Hajde da dublje istražimo šta je sve moguće!

## Korišćenje dinamičkih podataka u Vue komponentama

Vue komponente mogu biti korišćene direktno unutar vašeg Markdown sadržaja. Ovo vam omogućava da kombinujete statički sadržaj sa dinamičkim funkcijama, kao što je preuzimanje podataka sa API-ja.

Ono što je **veoma bitno** je da se komponenta nalazi unutar foldera **components/content**

Evo primera jednostavne **WeatherComponent** komponente koja preuzima podatke o vremenu koristeći [OpenWeather API](https://openweathermap.org/).

<br/>

**Prvo, kreirajte novu komponentu:**

```vue
<!-- components/content/WeatherComponent.vue -->
<template>
  <div class="weather">
    <p v-if="weather">{{ weather.main.temp }}°C. {{ city }}</p>
    <p v-else>Loading weather data for {{ city }}...</p>
  </div>
</template>

<script setup>
const props = defineProps({
  city: {
    type: String,
    required: true
  }
})

const apiKey = 'your-api-key-here'
const weather  = await $fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`
)
</script>

<style scoped>
.weather {
  font-size: 1.2em;
}
</style>
```

A zatim jednostavno dodajte komponentu u Markdown fajl i prosledite naziv željenog mesta:

Važno: Vue komponente u Markdown fajlovima ne smeju koristiti auto-close tagove. Iako auto-close tagovi poput:

```vue
<WeatherComponent city="Belgrade" />
```

mogu pravilno prikazati komponentu, sve što dolazi nakon te komponente možda se neće prikazati zbog načina na koji Markdown parser obrađuje auto-close tagove.

Zato je potrebno da komponente uvek imaju eksplicitno zatvaranje:

```vue
<WeatherComponent city="Belgrade"></WeatherComponent>
```

Ovo osigurava da se kompletan sadržaj, uključujući komponente i sav tekst koji sledi, pravilno prikaže.

### Objašnjenje:

- **Dinamičke komponente**: Uključili smo Vue komponentu za preuzimanje podataka o vremenu.
- **API integracija**: Prikazano je kako dohvatiti podatke sa javnog API-ja (OpenWeather) i prikazati ih unutar Markdown fajla.
- **Isticanje koda**: Prikazano je kako formatirati isečke koda sa isticanjem sintakse u Markdown-u.

Ovaj primer vam može pomoći da strukturirate naprednije blog postove koristeći **Nuxt 3** i **`@nuxt/content`**. Javite ako vam treba dodatno objašnjenje ili pomoć!

## Prikazivanje vremenskih podataka u Markdown-u

Evo trenutnog vremena u **Beogradu**:

<WeatherComponent city="Belgrade"></WeatherComponent>

---
Aleksandar Pejković  
**Web developer**  
