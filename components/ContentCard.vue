<template>
  <div class="card">
    <NuxtLink :to="item._path" class="card-link">
      <h5>{{ item.date }}</h5>
      <NuxtImg class="card-image" :src="item.image" />
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.card {
  background-color: var(--primary-color);
  border: 2px solid var(--accent-color);
  border-radius: 10px;
  box-shadow: 6px 6px 0 var(--accent-color);
  padding: 1.5rem;
  margin: 1rem 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 8px 8px 0 var(--accent-color-dark);
}

.card-link {
  text-decoration: none;
  color: inherit;
}

.card-image {
  width: 100%;
  border-radius: 10px;
}

h3 {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  color: var(--accent-color);
  transition: color 0.3s ease;
}

.card:hover h3 {
  color: var(--accent-color-dark);
}

p {
  margin: 0;
  color: #666;
  font-size: 1rem;
}
</style>
