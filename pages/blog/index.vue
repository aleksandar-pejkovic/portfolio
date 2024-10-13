<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="localePath(post._path)">{{ $t(post.title) }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { locale } = useI18n()

const { data: posts } = await useAsyncData('content:blog', () =>
  queryContent(`${locale.value}/blog`).only(['_path', 'title']).find()
)
</script>
