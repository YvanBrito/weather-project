export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'weather-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/vue2-google-maps.js' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  vendor: ['vue2-google-maps'],

  proxy: {
    '/googleplacesapi/': {
      target: 'https://maps.googleapis.com/maps/api/place/autocomplete',
      pathRewrite: { '^/googleplacesapi/': '' },
    },
    '/googleplacesdetailsapi/': {
      target: 'https://maps.googleapis.com/maps/api/place/details',
      pathRewrite: { '^/googleplacesdetailsapi/': '' },
    },
    '/googleplacesphotosapi/': {
      target: 'https://maps.googleapis.com/maps/api/place/',
      pathRewrite: { '^/googleplacesphotosapi/': '' },
    },
    '/apiweather/': {
      target: 'http://api.openweathermap.org/data/2.5/',
      pathRewrite: { '^/apiweather/': '' },
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: { transpile: [/^vue2-google-maps($|\/)/] },
}
