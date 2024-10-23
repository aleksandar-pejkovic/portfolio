<template>
  <header ref="target">
    <nav>
      <!-- Hamburger button -->
      <LayoutHamburger @toggle="toggleMenu" :menuOpen="menuOpen" />

      <!-- Navigation links -->
      <div :class="{ 'menu-open': menuOpen }" class="nav-links">
        <NuxtLink :to="localePath('/')" :class="{ 'active-link': $route.path === `/${locale}` }" @click="closeMenu">
          Aleksandar Pejković</NuxtLink>
        <NuxtLink :to="localePath('/blog')" :class="{ 'active-link': $route.path.startsWith(`/${locale}/blog`) }"
          @click="closeMenu">{{ $t('blog') }}</NuxtLink>
        <NuxtLink :to="localePath('/about')" :class="{ 'active-link': $route.path === `/${locale}/about` }"
          @click="closeMenu">{{ $t('about') }}</NuxtLink>
        <NuxtLink :to="localePath('/contact')" :class="{ 'active-link': $route.path === `/${locale}/contact` }"
          @click="closeMenu">{{ $t('contact') }}</NuxtLink>
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

const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu = () => (menuOpen.value = false)

const target = ref(null)
onClickOutside(target, () => {
  if (menuOpen.value)
    closeMenu()
})

</script>

<style scoped>
/* Header styling */
header {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);
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
  border-bottom: 2px solid transparent;
}

/* Hover and focus effects for navigation links */
nav a:hover {
  border-bottom: 2px solid var(--accent-color);
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
  border-bottom: 2px solid var(--accent-color) !important;
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .header {
    position: top;
  }

  .nav-links {
    display: flex;
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
    visibility: hidden;
    transform: translateY(-100%);
    transition: transform 0.9s ease-in-out;
  }

  .nav-links.menu-open {
    visibility: visible;
    transform: translateY(0);
  }

  nav a {
    font-size: 1.2rem;
    padding: 0.5rem 0;
  }
}
</style>
