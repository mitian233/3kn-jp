// https://nuxt.com/docs/api/configuration/nuxt-config
import siteConfig from "./site.config"
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head:{
      title: siteConfig.title,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {rel: 'icon', href: '/favicon.svg'},
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=M+PLUS+Rounded+1c&display=swap'}
      ],
    },
    pageTransition: {name: 'page'},
  },

  css: [
      '~/main.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["nuxt-gtag"],
  gtag: {
    id: 'G-3JH0BQ2RSZ'
  }
})
