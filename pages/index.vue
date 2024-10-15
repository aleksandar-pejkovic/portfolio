<template>
  <div class="wow-content">
    <!-- Hero section -->
    <section class="hero-section">
      <div class="hero-text">
        <h1 class="wow-title">{{ $t('welcome1') }} <br/> <span class="accent-text">{{ $t('welcome2') }}</span> - {{ $t('welcome3') }} <span class="accent-text">{{ $t('welcome4') }}</span> {{ $t('welcome5') }}</h1>
        <p class="wow-subtitle">{{ $t('heroSubtitle') }}</p>
        <NuxtLink :to="localePath('/about')" class="button">{{ $t('learnMore') }}</NuxtLink>
      </div>
    </section>

    <!-- Projects showcase -->
    <section class="projects-section">
      <h2>{{ $t('myProjects') }}</h2>
      <div class="projects-grid">
        <NuxtLink :to="localePath('/projects/budgetplus')" class="project-card">
          <div class="project-image" style="background-image: url('/img/projects/budgetplus/landing-page.png');"></div>
          <h3>BudgetPlus</h3>
          <p>{{ $t('budgetPlusDesc') }}</p>
        </NuxtLink>
        <NuxtLink :to="localePath('/projects/reliabill')" class="project-card">
          <div class="project-image" style="background-image: url('/img/projects/reliabill/landing-page.jpeg');"></div>
          <h3>ReliaBill</h3>
          <p>{{ $t('reliaBillDesc') }}</p>
        </NuxtLink>
      </div>
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
/* The animation code */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

/* Hero Section */
.hero-section {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wow-title {
  font-size: 4rem;
  font-weight: bold;
  line-height: normal;
  animation: fadeInDown 1s ease-out;
}

.wow-subtitle {
  font-size: 1.8rem;
  margin: 2rem 0;
  animation: fadeInUp 1.5s ease-out;
}

.accent-text {
  color: var(--accent-color);
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
}

/* Projects Section */
.projects-section {
  padding: 5rem 0;
  background-color: #fff;
  text-align: center;
}

.projects-grid {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.project-card {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: left;
  width: 300px;
}

.project-image {
  height: 200px;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
}

.project-card h3 {
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #333;
}

.project-card:hover {
  transform: translateY(-10px);
}

/* Technologies Section */
.technologies-section {
  padding: 4rem 0;
  background-color: #f0f0f0;
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

</style>
