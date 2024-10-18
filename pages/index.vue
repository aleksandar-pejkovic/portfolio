<template>
  <div>
    <!-- Hero section -->
    <section class="hero-section">
      <HomeHero />
    </section>

    <!-- Projects showcase -->
    <section class="projects-section">
      <HomeProjects />
    </section>

    <!-- Technologies section -->
    <section class="technologies-section">
      <HomeTechnologies />
    </section>

    <!-- Call to action section -->
    <section class="cta-section">
      <HomeCta />
    </section>

  </div>
</template>

<script setup>
</script>

<style scoped>
/* Hero Section */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
}

/* Projects Section */
.projects-section {
  padding: 5rem 0;
  text-align: center;
}

/* Technologies Section */
.technologies-section {
  padding-top: 4rem;
  text-align: center;
}

/* Let's Connect Section */
.cta-section {
  padding: 4rem 0;
  text-align: center;
}

@media (max-width: 768px) {
  .projects-section {
    padding: 0;
  }
}
</style>
