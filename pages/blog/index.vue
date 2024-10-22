<template>
  <div>
    <h1>Blog</h1>
    <div class="content-grid">
      <ContentCard v-for="post in posts" :key="post._path" :item="post" />
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()

const { data: posts } = await useAsyncData('content:blog', () =>
  queryContent(`${locale.value}/blog`).only(['_path', 'title', 'description', 'date', 'tags', 'image']).find()
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
