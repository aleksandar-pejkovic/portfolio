<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>

const { data: posts } = await useAsyncData('content:blog', () =>
  queryContent('blog').only(['_path', 'title']).find()
)
</script>
