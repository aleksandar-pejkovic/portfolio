<template>
  <div>
    <header>
      <nav>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/blog">Blog</nuxt-link>
        <nuxt-link to="/projects">Projects</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
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

<style scoped>
/* Add your styles here */
</style>
