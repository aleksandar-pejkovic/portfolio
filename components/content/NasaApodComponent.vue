<!-- components/content/NasaApodComponent.vue -->
<template>
  <div class="nasa-apod" v-if="apod">
    <h3>{{ apod.title }}</h3>
    <img v-if="apod.media_type === 'image'" :src="apod.url" :alt="apod.title" />
    <iframe v-if="apod.media_type === 'video'" :src="apod.url" frameborder="0"></iframe>
    <p>{{ apod.explanation }}</p>
  </div>

  <!-- Dodaj loader ili fallback sadržaj dok se podaci učitavaju -->
  <div v-else>
    <p>Učitavanje NASA slike dana...</p>
  </div>
</template>

<script setup>

const apod = ref(null)

onMounted(async () => {
  const apiKey = 'SIcoADOoxacu9KNLYj0wTmorTGkCDmIosV5dkIfD'
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    apod.value = await response.json()
  } catch (error) {
    console.error('Greška pri dohvaćanju podataka sa NASA APOD API-ja:', error)
  }
})
</script>

<style scoped>
.nasa-apod {
  text-align: center;
  margin: 2rem 0;
}

.nasa-apod img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.nasa-apod iframe {
  width: 100%;
  height: 400px;
  border-radius: 10px;
}

.nasa-apod h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.nasa-apod p {
  font-size: 1rem;
  margin-top: 1rem;
  color: #555;
}
</style>
