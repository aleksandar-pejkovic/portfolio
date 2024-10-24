// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    assets: '/<rootDir>/assets',
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-blue.svg' }
      ],
      meta: [
        { name: 'description', content: 'Aleksandar Pejković, a dedicated web developer focused on creating functional, reliable, and scalable digital solutions. Combining expertise in backend and frontend technologies, Aleksandar is passionate about building intuitive web applications that drive business success.' },
        { property: 'og:title', content: 'Aleksandar Pejković - Web Developer' },
        { property: 'og:description', content: 'Aleksandar Pejković, a dedicated web developer focused on creating functional, reliable, and scalable digital solutions. Combining expertise in backend and frontend technologies, Aleksandar is passionate about building intuitive web applications that drive business success.' },
        { property: 'og:image', content: '/img/main/cover.png' },
        { property: 'og:url', content: 'https://aleksandarpejkovic.com' },
        { property: 'og:type', content: 'website' }
      ]
    },
    pageTransition: { name: 'fade', mode: 'out-in' }
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
  gtag: {
    id: 'G-NV49GNEK3F',
    config: {
      anonymize_ip: true, // Anonymize IP addresses if needed
    },
  },
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxt/image', '@vueuse/nuxt', 'nuxt-gtag'],
})