<template>
  <div class="weather">
    <p v-if="weather">The weather in {{ city }} is {{ weather.main.temp }}°C.</p>
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

const weather = ref(null)

onMounted(async () => {
  const apiKey = '7b016e15137d09caa1790c69a01f979a'
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`
  )
  weather.value = await response.json()
})
</script>

<style scoped>
.weather {
  font-size: 1.2em;
  color: #333;
}
</style>