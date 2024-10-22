---
title: "Advanced Features with Nuxt 3 and @nuxt/content"
description: "Explore how to use dynamic data, Vue components, and third-party APIs in Nuxt 3 using Markdown."
date: "2024-10-21"
tags: ["Nuxt 3", "Vue 3", "API", "Components", "Markdown", "@nuxt/content"]
image: "/img/blog/nuxt-content/cover.png"
---

# Nuxt 3 and @nuxt/content

<img src="/img/blog/nuxt-content/cover.png" alt="nuxt-content cover" class="content-project-image">

Welcome to your first blog post! In this guide, we'll explore how to create a blog post using **Nuxt 3** and the **@nuxt/content** module. We'll include code examples and images to make the post more engaging.

You can find everything related to Nuxt content on the official website:

https://content.nuxt.com/

## Prerequisites

Before we begin, make sure you have the following installed:

- **Node.js** (v14 or later)
- **Nuxt 3**

## Setting Up the Project

First, create a new Nuxt 3 content project:

```bash
npx nuxi@latest init my-nuxt-blog -t content
cd my-nuxt-blog
```

Alternatively, you can add the content module to an existing project at any time:
```bash
npx nuxi@latest module add content
```

Then, add @nuxt/content to the modules section of your nuxt.config.ts:

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

## Using the @nuxt/content Module to Render Content Based on Path

The **@nuxt/content** module automatically maps files from the **content/** folder to routes. This means that each Markdown file you place in this folder becomes an accessible page on the site with the corresponding URL path.

### Step 1: Creating Markdown Files

Within the **content/blog/** folder, create a Markdown file **my-first-post.md**.

### Step 2: Displaying Content With Dynamic URL

The **`<ContentDoc />`** component, part of the @nuxt/content module, automatically displays content based on the URL path. When a user visits a route such as **/blog/my-first-post**, Nuxt automatically displays the content of the **content/blog/my-first-post.md** file using **`<ContentDoc />`**.

Inside the **pages/blog/ folder**, create a new component **`[slug].vue`**, which represents the dynamic part of the URL path, and then add the following code to display the content of Markdown files:

```vue
<!-- pages/blog/[slug].vue -->
<template>
  <div>
    <ContentDoc />
  </div>
</template>
```

---

## Advanced Features with Nuxt 3 and @nuxt/content

Now, let's explore some advanced features of **Nuxt 3** and the **@nuxt/content** module, such as using Vue components with dynamic data and integrating third-party APIs directly into your Markdown files.

## Using Dynamic Data in Vue Components

Vue components can be used directly within your Markdown content. This allows you to combine static content with dynamic functionality, such as fetching data from an API.

A key detail is that the component must be located in the **components/content** folder.

Here’s an example of a simple **WeatherComponent** that fetches weather data using the [OpenWeather API](https://openweathermap.org/).

<br/>

**First, create a new component:**

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

Then, simply add the component to the Markdown file and pass the desired city name:

**Important:** Vue components in Markdown files **should not use auto-close tags**. While auto-close tags like:

```vue
<WeatherComponent city="Belgrade" />
```

might render the component correctly, anything after the component may not render due to the way the Markdown parser handles auto-close tags.

Instead, you should always explicitly close components like this:

```vue
<WeatherComponent city="Belgrade"></WeatherComponent>
```

This ensures that the entire content, including components and any following text, renders correctly.

### Explanation:

- **Dynamic Components**: We’ve included a Vue component to fetch weather data.
- **API Integration**: This example shows how to fetch data from a public API (OpenWeather) and display it within a Markdown file.
- **Code Highlighting**: Shows how to format code snippets with syntax highlighting in Markdown.

This example can help you structure more advanced blog posts using **Nuxt 3** and **`@nuxt/content`**. Let me know if you need further clarification or assistance!

## Displaying Weather Data in Markdown

Here is the current weather in **Belgrade**:

<WeatherComponent city="Belgrade"></WeatherComponent>

---

Aleksandar Pejković  
**Web Developer**  
