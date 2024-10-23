---
title: "Multilingual Website with Nuxt 3 and @nuxtjs/i18n"
description: "Learn how to create a multilingual website in Nuxt 3 using the @nuxtjs/i18n module, with content stored in language-specific folders."
date: "2024-10-21"
tags: ["Nuxt 3", "Vue 3", "i18n", "Multilingual", "Markdown", "@nuxtjs/i18n"]
image: "/img/blog/nuxt-i18n/cover.png"
---

# {{ $doc.title }}

<img src="/img/blog/nuxt-i18n/cover.png" alt="nuxt-i18n cover" class="content-project-image">

In this blog post, we’ll explore how to set up multilingual content in **Nuxt 3** using the **@nuxtjs/i18n** module. We'll configure content to be pulled from language-specific folders for **Serbian** and **English** languages, and demonstrate how Nuxt automatically detects and applies the user's browser language settings.

You can find the official documentation for the **@nuxtjs/i18n** module at the following link:

https://nuxt.com/modules/i18n

## Prerequisites

Before we begin, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **Nuxt 3**
- **@nuxtjs/i18n** module

## Setting Up the Project

First, create a new Nuxt 3 project:

```bash
npx nuxi@latest init my-nuxt-i18n-site
cd my-nuxt-i18n-site
```

Then, add the **@nuxtjs/i18n** module:

```bash
npx nuxi@latest module add @nuxtjs/i18n
```

### Configuration for **@nuxtjs/i18n**

The next step is configuring it in your `nuxt.config.ts` file. Add the following code:

```js
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    // List of supported languages
    locales: [
      { code: 'sr', name: 'Serbian', iso: 'sr-RS', file: 'sr.json' },
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' }
    ],
    // Default site language
    defaultLocale: 'sr',

    // Directory with translations
    langDir: 'locales/',

    // Routing strategy
    strategy: 'prefix', // Adds language prefix to URL, e.g. /en/about or /sr/about

    // Automatic language switching based on user’s browser settings
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'sr',
    }
  }
})
```

## Organizing Multilingual Content in the `content/` Folder

You can organize your content into language-specific folders. For example:

```
content/
├── en/
│   └── blog/
│       └── my-first-post.md
├── sr/
    └── blog/
        └── my-first-post.md
```

Here, Nuxt will automatically handle routing based on the user’s browser language settings or the language selected on the site. If the user visits **`/en/blog/my-first-post`**, the content will be displayed in English, while visiting **`/sr/blog/my-first-post`** will show the content in Serbian.

### Browser Language Detection

By default, the i18n module automatically detects the user’s browser language and loads the appropriate content. If the browser is set to English, Nuxt will display the English version of the site. If it's set to Serbian, the Serbian version will be shown.

## Using **@nuxt/content** to Display Multilingual Content

The **@nuxt/content** module uses dynamic routes and searches content based on paths in the **content/** folder. Combined with **@nuxtjs/i18n**, you can easily manage different languages within your Markdown files.

### Creating Markdown Files

Inside the **content/** folder, create language-specific versions of your posts:

- **content/en/blog/my-first-post.md**
- **content/sr/blog/my-first-post.md**

Each version contains translated content in the respective language.

### Displaying Content with **`<ContentDoc />`**

To dynamically display content based on the language, use the built-in **`<ContentDoc />`** component. Nuxt will handle the rest.

Inside the **`pages/blog/[slug].vue`** folder, add the following code to display the content:

```vue
<template>
  <div>
    <ContentDoc />
  </div>
</template>
```

This code automatically displays content from the **content/** folder depending on the route and selected language.

---

## Conclusion

By combining **Nuxt 3**, **@nuxtjs/i18n**, and **@nuxt/content** modules, you can easily create a multilingual website that dynamically loads content based on the user’s language or browser settings. This approach allows for simple management of global content and improves the user experience for different language groups.

---

Aleksandar Pejković  
**Web Developer**
