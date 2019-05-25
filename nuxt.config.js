import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'google-site-verification', content: 'AY-a4ORJi1hIBLAWe1W2-K2kjr0b8-PMXHRjKlDIeGg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '@/styles/hajime/main.scss',
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
    ['nuxt-wp-json', {
      config: {
        url: 'http://wp.vuewordpress.io/',
        lang: 'en',
        pages: {
          index: "home"
        },
        menus: false
      }
    }]
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
  }
}
