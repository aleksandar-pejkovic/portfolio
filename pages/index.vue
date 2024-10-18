<template>
  <div class="wow-content">
    <!-- Hero section -->
    <section class="hero-section">
      <Hero />
    </section>

    <!-- Projects showcase -->
    <section class="projects-section">
      <Projects />
    </section>

    <!-- Technologies section -->
    <section class="technologies-section">
      <h2>{{ $t('technologies') }}</h2>
      <div class="tech-icons">
        <div class="tech-icon">
          <img src="/assets/icons/java.svg" alt="Java">
          <p>Java</p>
        </div>
        <div class="tech-icon">
          <img src="/assets/icons/springboot.svg" alt="Spring Boot">
          <p>Spring Boot</p>
        </div>
        <div class="tech-icon">
          <img src="/assets/icons/nuxt.svg" alt="Nuxt.js">
          <p>Nuxt.js</p>
        </div>
        <div class="tech-icon">
          <img src="/assets/icons/vue.svg" alt="Vue.js">
          <p>Vue.js</p>
        </div>
        <div class="tech-icon">
          <img src="/assets/icons/mysql.svg" alt="Vue.js">
          <p>Vue.js</p>
        </div>
        <div class="tech-icon">
          <img src="/assets/icons/git.svg" alt="Vue.js">
          <p>Vue.js</p>
        </div>
      </div>
    </section>

    <!-- Call to action section -->
    <section class="cta-section">
      <h2>{{ $t('workTogether') }}</h2>
      <p>{{ $t('workTogetherDescription') }}</p>
      <NuxtLink :to="localePath('/contact')" class="button">{{ $t('contactMe') }}</NuxtLink>
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
  padding: 4rem 0;
  text-align: center;
}

.tech-icons {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.tech-icon {
  text-align: center;
  width: 100px;
}

.tech-icon img {
  width: 60px;
  height: 60px;
}

.tech-icon p {
  margin-top: 1rem;
  font-size: 1rem;
}

/* Let's Connect Section */
.cta-section {
  padding: 4rem 0;
  color: black;
  text-align: center;
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .projects-section {
    padding: 0;
  }
}
</style>
