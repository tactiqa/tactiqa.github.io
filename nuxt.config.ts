// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/icon',
    ['@nuxt/ui', {
      global: true,
      icons: ['mdi', 'heroicons'],
      safelistColors: ['primary', 'secondary'],
    }]
  ],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  },

  ui: {
    strategy: 'override',
    global: true,
    icons: {
      dynamic: true,
    },
    theme: {
      colors: [
        'primary',
        'secondary',
        'tertiary',
        'info',
        'success',
        'warning',
        'error'
      ]
    }
  },


  // https://nuxt.com/modules/fonts
  fonts: {
    families: [
      {
        name: 'Roboto',
        provider: 'google',
        weights: ['100', '300', '400', '500', '700', '900'],
        styles: ['normal', 'italic'],
      },
      {
        name: 'Roboto Mono',
        provider: 'google',
        weights: ['100', '300', '400', '500', '700'],
        styles: ['normal', 'italic'],
      },
    ]
  },
  // Configure Tailwind to use Roboto as the default font
  // tailwindcss: {
  //   config: {
  //     theme: {
  //       extend: {
  //         fontFamily: {
  //           sans: ['Roboto', 'sans-serif'],
  //           mono: ['Roboto Mono', 'monospace']
  //         }
  //       }
  //     }
  //   }
  // },

  // Set default font family for the app
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Roboto+Mono:wght@100;300;400;500;700&display=swap'
        }
      ]
    }
  }
})