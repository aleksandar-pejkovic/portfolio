// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    assets: '/<rootDir>/assets',
  },
  compatibilityDate: '2024-04-03',
  content: {
    highlight: {
      theme: 'github-light', // You can choose another theme if you prefer
      langs: [
        'vue', // Explicitly load the Vue language for syntax highlighting
        'javascript',
        'java',
        'css',
        'html',
        'bash',
        // Add more languages here if needed
      ],
    },
  },
  css: ['~/assets/css/main.scss'],
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
})