<template>
  <header>
    <nav>
      <!-- Hamburger button -->
      <button class="hamburger" @click="toggleMenu">
        <span :class="{ 'open': menuOpen }"></span>
        <span :class="{ 'open': menuOpen }"></span>
        <span :class="{ 'open': menuOpen }"></span>
      </button>

      <!-- Navigation links -->
      <div :class="{ 'menu-open': menuOpen }" class="nav-links">
        <NuxtLink :to="localePath('/')" :class="{ 'active-link': $route.path === `/${locale}` }" @click="toggleMenu">Aleksandar Pejković</NuxtLink>
        <NuxtLink :to="localePath('/blog')" :class="{ 'active-link': $route.path.startsWith(`/${locale}/blog`) }" @click="toggleMenu">{{ $t('blog') }}</NuxtLink>
        <NuxtLink :to="localePath('/projects')" :class="{ 'active-link': $route.path.startsWith(`/${locale}/projects`) }" @click="toggleMenu">{{ $t('projects') }}</NuxtLink>
        <NuxtLink :to="localePath('/about')" :class="{ 'active-link': $route.path === `/${locale}/about` }" @click="toggleMenu">{{ $t('about') }}</NuxtLink>
        <NuxtLink :to="localePath('/contact')" :class="{ 'active-link': $route.path === `/${locale}/contact` }" @click="toggleMenu">{{ $t('contact') }}</NuxtLink>

        <!-- Switch locale button -->
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
          {{ locale.name }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const $route = useRoute()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const menuOpen = ref(false)

const toggleMenu = () => (menuOpen.value = !menuOpen.value);
</script>

<style scoped>
/* Header styling */
header {
  border-bottom: 2px solid #d1d5db;
  position: sticky;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Navigation bar styling */
nav {
  text-align: center;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

nav a {
  color: black;
  text-decoration: none;
  font-weight: bolder;
  padding: 0.5rem 1rem;
  border-bottom: 2px solid white;
}

/* Hover and focus effects for navigation links */
nav a:hover {
  border-bottom: 2px solid maroon;
  transition: border-bottom 0.5s ease;
}

/* Navigation links styling */
.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

/* Active link styling */
.active-link {
  border-bottom: 2px solid maroon !important;
}

/* Hamburger styling */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  z-index: 1000;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #000;
  transition: all 0.3s ease;
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 1rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }

  .nav-links.menu-open {
    display: flex;
  }

  nav a {
    font-size: 1.2rem;
    padding: 0.5rem 0;
  }
}
</style>
