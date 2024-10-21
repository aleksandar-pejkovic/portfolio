<template>
  <h2>{{ $t('workTogether') }}</h2>
  <div class="cta">
    <p>{{ $t('workTogetherDescription') }}</p>
    <NuxtLink :to="localePath('/contact')" class="button cta-btn">{{ $t('contactMe') }}
</NuxtLink>
  </div>
</template>

<script setup>
</script>

<style scoped>
h2 {
  font-size: 2.5rem;
}

.cta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  margin-top: 1.5rem;
}
</style>
