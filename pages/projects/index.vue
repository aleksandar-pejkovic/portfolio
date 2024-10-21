<template>
  <div>
    <h1>Projects</h1>
    <div class="content-grid">
      <ContentCard v-for="project in projects" :key="project._path" :item="project" />
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()

const { data: projects } = await useAsyncData('content:projects', () =>
  queryContent(`${locale.value}/projects`).only(['_path', 'title', 'description', 'image']).find()
)
</script>

<style scoped>
.content-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
