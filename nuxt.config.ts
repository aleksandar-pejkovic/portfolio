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
  i18n: {
    // Lista podržanih jezika
    locales: [
      { code: 'sr', name: 'Srpski', iso: 'sr-RS', file: 'sr.json' },
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' }
    ],
    // Default jezik sajta
    defaultLocale: 'sr',

    // Direktorijum sa prevodima
    langDir: 'locales/',

    // Strategija rutiranja
    strategy: 'prefix', // Dodaje jezički prefiks u URL, npr. /en/about ili /sr/about

    // Automatski prebacivanje jezika bazirano na pretraživaču korisnika
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'sr',
    }
  },
  css: ['~/assets/css/main.scss'],
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxt/image'],
})
