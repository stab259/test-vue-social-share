// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // https://nuxt.com/docs/getting-started/seo-meta
  app: {
    head: {
      title: 'Invitation Page',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
        { name: 'description', content: 'An Invitation Website' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    },
  },
  modules: [
    // https://tailwindcss.nuxtjs.org/getting-started/setup
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org/setup
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Inter: {
            wght: [400, 600, 700],
          },
        },
        subsets: ['latin'],
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: false,
        download: true,
        base64: false,
      },
    ],
  ],
  runtimeConfig: {
    apiBaseUrl: process.env.NUXT_APP_API_BASE_URL,
  },
});
