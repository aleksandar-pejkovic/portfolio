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
      <div class="footer-content">
        <p>&copy; 2024 Aleksandar Pejković. All rights reserved.</p>

        <ul class="social-links">
          <li>
            <a href="https://github.com/aleksandar-pejkovic" target="_blank" rel="noopener">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aleksandar-pejkovic/" target="_blank" rel="noopener">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:aleksandarpejkovic@hotmail.com">Email</a>
          </li>
        </ul>

        <p>Built with ❤️ using Nuxt 3</p>
      </div>
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
nav a:hover {
  border-radius: 5px;
  scale: 1.1;
  color: whitesmoke;
  /* Promena nijanse slova */
  transition: font-size 0.5s ease, color 0.5s ease;
  /* Dodata tranzicija za glatko povećanje */
}

/* Main content styling */
main {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  min-height: 70vh;
  /* Ensure the main content takes up sufficient space */
}

/* Footer content styling */
footer {
  background-color: #1e1e2f;
  color: white;
  text-align: center;
  padding: 2rem 0;
  margin-top: auto;
}

.footer-content p {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.social-links {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-links li {
  display: inline;
}

.social-links a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #4CAF50;
  /* Hover color */
}

.footer-content p:last-child {
  font-size: 0.9rem;
  color: #999;
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
