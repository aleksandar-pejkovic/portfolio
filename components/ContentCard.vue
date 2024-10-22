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
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
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
  color: #333;
}

p {
  margin: 0;
  color: #666;
  font-size: 1rem;
}
</style>
