export default {
  target: 'static',
  ssr: false,
  head: {
    title: 'Financial Match',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Financial Match | Apply for Your ERC Credit Today!' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    script: []
  },
  styleResources: {
    scss: ['~/assets/scss/_functions.scss']
  },
  plugins: [
    { src: '~/plugins/vue-tiny-slider.client.js' },
    { src: '~/plugins/mg-animation.client.js' },
  ],
  css: ["~/assets/scss/global.scss"],
  components: true,
  router: {
    base: '/financialmatch/',
    mode: 'history',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'error',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue'),
      })
    },
  },
  generate: {
    dir: './dist'
  },
  build: {
    target: 'static'
  },
  modules: ['@nuxtjs/axios', 'nuxt-sweetalert2', '@nuxtjs/style-resources'],
}
