import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Vue WordPress',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Front-End PWA solution for WordPress based on Vue.js' },
      { name: 'google-site-verification', content: 'AY-a4ORJi1hIBLAWe1W2-K2kjr0b8-PMXHRjKlDIeGg' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/img/vuejs-logo.png' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/mailtoharshit/San-Francisco-Font-/sanfrancisco.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'rgba(45, 45, 45, 0.98)' },

  /*
  ** Global CSS
  */
  css: [
    'fantastic-css',
    'fantastic-gutenberg',
    '@/styles/themes/apple/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/google-analytics', {
        id: 'UA-140780613-2'
      }
    ],
    [
      '@vue-wordpress/nuxt', {
        config: {
          url: 'https://wp.vuewordpress.io/',
          lang: 'en',
          menus: [
            'main-menu',
            'apple-menu'
          ],
        },
        router: 'manual',
        store: 'manual'
      }
    ],
    '@nuxtjs/pwa'
  ],

  workbox: {
    runtimeCaching: [
      {
        urlPattern: new RegExp('^https://wp\.vuewordpress\.io/'),
        handler: 'networkFirst',
        options: {
          networkTimeoutSeconds: 5,
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vue-wp-json'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    routes: [
      '/page/test',
      '/page/apple',
      '/apple',
      '/apple/mac',
      '/apple/ipad',
      '/apple/iphone',
      '/apple/watch',
      '/apple/tv',
      '/apple/music',
      '/apple/support'
    ]
  }
}
