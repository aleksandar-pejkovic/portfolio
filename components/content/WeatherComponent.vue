<template>
  <div class="weather">
    <p v-if="weather">{{ weather.main.temp }}°C {{ city }}</p>
    <p v-else>{{ $t('weather-loading-msg') }} {{ city }}...</p>
  </div>
</template>

<script setup>
const props = defineProps({
  city: {
    type: String,
    required: true
  }
})

const apiKey = '7b016e15137d09caa1790c69a01f979a'
const weather  = await $fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`
)
</script>

<style scoped>
.weather {
  font-size: 1.2em;
}
</style>