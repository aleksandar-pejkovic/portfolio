<template>
  <div class="hero-text">
    <h1 class="wow-title">{{ $t('welcome1') }} <br /> <span class="accent-text">{{ $t('welcome2') }}</span> <br /> {{
      $t('welcome3') }} <span class="accent-text">{{ $t('welcome4') }}</span> {{ $t('welcome5') }}</h1>
    <p class="wow-subtitle">{{ $t('heroSubtitle') }}</p>
    <NuxtLink :to="localePath('/about')" class="button">{{ $t('learnMore') }}</NuxtLink>
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

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  text-align: left;
}

.wow-title {
  font-size: 4rem;
  line-height: normal;
  animation: fadeInDown 1s ease-out;
  transition: transform 1.3s ease, color 1.3s ease;
}

.wow-subtitle {
  font-size: 1.8rem;
  margin: 2rem 0;
  animation: fadeInUp 1.5s ease-out;
}

.accent-text {
  color: var(--accent-color);
  transition: transform 1.3s ease, color 1.3s ease;
}

.accent-text:hover {
  transform: scale(1.05);
  color: maroon;
}

@media (max-width: 768px) {
  .wow-title {
    font-size: 2rem;
  }

  .wow-subtitle {
    font-size: 1.3rem;
  }
}
</style>