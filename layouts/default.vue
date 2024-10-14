<template>
  <Header />

    <slot />

  <Footer />
</template>

<script setup>
</script>

<style scoped>
/* Main content styling */
main {
  max-width: 1000px;
  margin: 0 auto;
  min-height: 75vh;
  /* Ensure the main content takes up sufficient space */
}

/* Responsive design */
@media (max-width: 768px) {
  main {
    padding: 1rem;
  }
}
</style>
