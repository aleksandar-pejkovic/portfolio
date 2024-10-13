<template>
  <div>
    <header>
      <nav>
        <NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink>
        <NuxtLink :to="localePath('/blog')">{{ $t('blog') }}</NuxtLink>
        <NuxtLink :to="localePath('/projects')">{{ $t('projects') }}</NuxtLink>
        <NuxtLink :to="localePath('/about')">{{ $t('about') }}</NuxtLink>
        <NuxtLink :to="localePath('/contact')">{{ $t('contact') }}</NuxtLink>

        <!-- Switch locale button -->
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
          {{ locale.name }}
        </NuxtLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <!-- Footer content -->
      <p>&copy; 2024 Aleksandar Pejković</p>
    </footer>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<style scoped>
/* Header styling */
header {
  background-color: #1e1e2f;
  padding: 1rem 0;
  text-align: center;
}

/* Navigation bar styling */
nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
}

/* Hover and focus effects for navigation links */
nav a:hover,
nav a:focus {
  background-color: #444;
  border-radius: 5px;
}

/* Main content styling */
main {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  min-height: 70vh;
  /* Ensure the main content takes up sufficient space */
}

/* Footer styling */
footer {
  background-color: #1e1e2f;
  color: white;
  text-align: center;
  padding: 1rem 0;
  margin-top: auto;
}

footer p {
  margin: 0;
  font-size: 1rem;
}

/* Responsive design */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 0.5rem;
  }

  nav a {
    font-size: 1rem;
    padding: 0.5rem 0;
  }

  main {
    padding: 1rem;
  }
}
</style>
