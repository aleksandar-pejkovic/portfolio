<template>
  <h2>{{ $t('technologies') }}</h2>
  <div class="tech-icons">
    <div class="tech-icon">
      <img src="/assets/icons/java.svg" alt="Java">
    </div>
    <div class="tech-icon">
      <img src="/assets/icons/springboot.svg" alt="Spring Boot">
    </div>
    <div class="tech-icon">
      <img src="/assets/icons/js.svg" alt="JavaScript.js">
    </div>
    <div class="tech-icon">
      <img src="/assets/icons/vue.svg" alt="Vue.js">
    </div>
    <div class="tech-icon">
      <img src="/assets/icons/nuxt.svg" alt="Nuxt.js">
    </div>
    <div class="tech-icon">
      <img src="/assets/icons/angular.svg" alt="Angular.js">
    </div>
    <div class="tech-icon">
      <img src="/assets/icons/mysql.svg" alt="MySql">
    </div>
    <div class="tech-icon">
      <img src="/assets/icons/git.svg" alt="Git">
    </div>
    <div class="tech-icon">
      <img src="/assets/icons/docker.svg" alt="Docker">
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.tech-icons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.tech-icon {
  text-align: center;
  width: 100px;
  transition: all 1.9s ease-in-out;
}

.tech-icon:hover {
  transform: rotateZ(720deg) scale(1.2);
}

.tech-icon img {
  width: 60px;
  height: 60px;
}

.tech-icon p {
  margin-top: 1rem;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .tech-icons {
    gap: 1rem;
    justify-content: center;
  }

  .tech-icon {
    width: 80px;
  }

  .tech-icon img {
    width: 50px;
    height: 50px;
  }

  .tech-icon p {
    font-size: 0.9rem;
  }
}
</style>