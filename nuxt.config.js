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
      { rel: 'icon', type: 'image/png', href: '/vuejs-logo.png' }
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/new-fantastic/hajime/main.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'hajime/main.scss',
    '@/styles/theme/main.scss'
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
      'nuxt-wp-json', {
        config: {
          url: 'https://wp.vuewordpress.io/',
          lang: 'en',
          pages: {
            index: 'start',
            apple: 'apple',
            mac: 'mac',
            test: 'test'
          },
          menus: [
            'main-menu',
            'apple-menu'
          ],
        },
        router: 'manual',
        store: 'manual'
      }
    ]
  ],

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
      '/page/apple'
    ]
  }
}
