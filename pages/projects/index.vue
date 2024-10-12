<template>
  <div>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project._path">
        <nuxt-link :to="project._path">{{ project.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>

const { data: projects } = await useAsyncData('content:projects', () =>
  queryContent('projects').only(['_path', 'title']).find()
)
</script>
