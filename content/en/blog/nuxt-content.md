---
title: "Advanced Features with Nuxt 3 and @nuxt/content"
description: "Explore how to use dynamic data, Vue components, and third-party APIs in Nuxt 3 with Markdown."
date: "2023-10-13"
tags: ["Nuxt 3", "Vue 3", "API", "Components", "Markdown"]
---

# Advanced Features with Nuxt 3 and @nuxt/content

In this post, we'll explore some advanced features of **Nuxt 3** and the **@nuxt/content** module, such as using Vue components with dynamic data and integrating third-party APIs directly into your Markdown files. Let's dive deeper into what's possible!

## Using Dynamic Data in Vue Components

Vue components can be used directly within your Markdown content. This allows you to combine static content with dynamic features, such as fetching data from an API.

Here’s an example of a simple **WeatherComponent** that fetches weather data using the [OpenWeather API](https://openweathermap.org/).

<br/>

**First, create a new component:**

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

### Explanation:

- **Dynamic Components**: We included Vue component for fetching weather data.
- **API Integration**: Demonstrated how to fetch data from a public API (OpenWeather) and display it within a Markdown file.
- **Code Highlighting**: Showed how to format code snippets with syntax highlighting in Markdown.

This example can help you structure more advanced blog posts using Nuxt 3 and `@nuxt/content`. Let me know if you need more clarification or assistance!

## Displaying Weather Data in Markdown

Here is the current weather in **Belgrade**:

<WeatherComponent city="Belgrade" />
