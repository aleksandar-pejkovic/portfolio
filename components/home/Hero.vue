<template>
  <div class="hero-text">
    <h1 class="wow-title">{{ $t('welcome1') }} <br /> <span class="accent-text">{{ $t('welcome2') }}</span> - {{
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

.wow-title {
  font-size: 4rem;
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

@media (max-width: 768px) {
  .wow-title {
    font-size: 2rem;
  }

  .wow-subtitle {
    font-size: 1.3rem;
  }
}
</style>