import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Wassap',
    title: 'Wassap',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:title', name: 'og:title', content: 'Wassap - 와인 가격 공유 사이트!' },
      { hid: 'og:image', name: 'og:image', content: 'https://wassap.co/wassap_mobile.png' },
      { hid: 'og:description', name: 'og:description', content: '설명 모라하지..' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500&display=swap'}
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
    '~assets/scss/animation.scss',
    '~assets/scss/common.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@plugins/vuetify'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/google-analytics', '@nuxtjs/vuetify'
  ],
  googleAnalytics: {
    id: 'UA-165999498-1'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    icons: {
        iconfont: 'md',
      },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
