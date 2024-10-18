<template>
  <h2>{{ $t('myProjects') }}</h2>
  <div class="projects-grid">
    <NuxtLink v-for="project in projects" :key="project.name" :to="localePath(project.path)" class="project-card">
      <div class="project-image" :style="{ backgroundImage: `url(${project.image})` }"></div>
      <h3>{{ project.name }}</h3>
      <p>{{ $t(project.descriptionKey) }}</p>
    </NuxtLink>
  </div>
</template>

<script setup>
import projects from '~/assets/data/projects.json'
</script>

<style scoped>
.projects-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.project-card {
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: left;
  width: 80%;
  max-width: 1200px;
}

.project-image {
  height: 400px;
  background-position: center;
  background-size: cover;
  border-radius: 8px;
}

.project-card h3 {
  margin-top: 1rem;
  font-size: 1.5rem;
  text-decoration: none;
}

.project-card:hover {
  transform: translateY(-10px);
}

/* @media query za mobilne uređaje */
@media (max-width: 768px) {

  .project-card {
    width: 100%;
    padding: 1rem;
  }

  .project-image {
    height: 150px;
  }

  .project-card h3 {
    font-size: 1.2rem;
  }
}
</style>