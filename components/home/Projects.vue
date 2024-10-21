<template>
  <h2>{{ $t('myProjects') }}</h2>
  <div class="projects-grid">
    <ContentCard v-for="project in projects" :key="project._path" :item="project" />
  </div>
</template>

<script setup>
const { locale } = useI18n()

const { data: projects } = await useAsyncData('content:projects', () =>
  queryContent(`${locale.value}/projects`).only(['_path', 'title', 'description', 'image']).find()
)
</script>

<style scoped>
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.project-card {
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: left;
  width: 80%;
  max-width: 1200px;
  text-decoration: none;
  color: black;
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