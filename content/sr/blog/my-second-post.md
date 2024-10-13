---
title: "Napredne funkcije sa Nuxt 3 i @nuxt/content"
description: "Istražite kako koristiti dinamičke podatke, Vue komponente i treće strane API-je u Nuxt 3 koristeći Markdown."
date: "2023-10-13"
tags: ["Nuxt 3", "Vue 3", "API", "Komponente", "Markdown"]
---

# Napredne funkcije sa Nuxt 3 i @nuxt/content

U ovom postu ćemo istražiti neke napredne funkcije **Nuxt 3** i **@nuxt/content** modula, kao što je korišćenje Vue komponenti sa dinamičkim podacima i integracija API-ja trećih strana direktno u vaše Markdown fajlove. Hajde da dublje istražimo šta je sve moguće!

## Korišćenje dinamičkih podataka u Vue komponentama

Vue komponente mogu biti korišćene direktno unutar vašeg Markdown sadržaja. Ovo vam omogućava da kombinujete statički sadržaj sa dinamičkim funkcijama, kao što je dohvat podataka sa API-ja.

Evo primera jednostavne **WeatherComponent** komponente koja preuzima podatke o vremenu koristeći [OpenWeather API](https://openweathermap.org/).

<br/>

**Prvo, kreirajte novu komponentu:**

```vue
<!-- components/content/WeatherComponent.vue -->
<template>
  <div class="weather">
    <p v-if="weather">The weather in {{ city }} is {{ weather.main.temp }}°C.</p>
    <p v-else>Loading weather data for {{ city }}...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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
  color: #333;
}
</style>
```

### Objašnjenje:

- **Dinamičke komponente**: Uključili smo dve Vue komponente: jednu za preuzimanje podataka o vremenu i drugu za integraciju NASA-ine slike dana (APOD API).
- **Slike**: Prikazano je kako uključiti i spoljašnje i lokalne slike u Markdown.
- **API integracija**: Prikazano je kako dohvatiti podatke sa javnog API-ja (OpenWeather i NASA API) i prikazati ih unutar Markdown fajla.
- **Isticanje koda**: Prikazano je kako formatirati isječke koda sa isticanjem sintakse u Markdown-u.

Ovaj primer vam može pomoći da strukturirate naprednije blog postove koristeći Nuxt 3 i `@nuxt/content`. Javite ako vam treba dodatno objašnjenje ili pomoć!

## Prikazivanje vremenskih podataka u Markdown-u

Evo trenutnog vremena u **Beogradu**:

<WeatherComponent city="Belgrade" />
