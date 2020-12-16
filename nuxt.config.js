export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  generate: {
    routes: ['/', '/menus', '/events', '/contact', '/personalities'],
  },

  // Target (https://go.nuxtjs.dev/config-target)
  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Minas Kaffebar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Vi er din nye kaffebar. Vi har et top lækkert sortiment af naturvin, kaffe, fadøk, toast, kager fra dessert dragen og MEGET andet lækkert - det fede er at hos os har vi en enhedspris på 20 kr. Det er hos os det sker. Vi glæder os til at se dig!',
      },
      {
        name: 'keywords',
        content: 'Minas, quality, coffee, stories, cozy',
      },
    ],
    script: [
      {
        crossorigin: 'anonymous',
        src: 'https://connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v9.0',
        nonce: 'VBa1wwIO',
        async: 'true',
        defer: 'true',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/minas-kaffebar/favicon.svg',
      },
      { rel: 'stylesheet', href: 'https://use.typekit.net/epy2zge.css' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/styles/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/dato'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/router',
      {
        keepDefaultRouter: true,
      },
    ],
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    [
      'nuxt-gmaps',

      {
        key: 'AIzaSyD2KwlnDZdgU1r8kE5fd16ZRDhqQAgV2aU',
      },
    ],
  ],

  styleResources: {
    scss: [
      '@/styles/variables.scss',
      '@/styles/mixins.scss',
      '@/styles/reset.scss',
      '@/styles/main.scss',
      '@/styles/includes/include-media.scss',
    ],
  },

  routerModule: {
    keepDefaultRouter: true,
  },
  router: {
    base: '/minas-kaffebar/',
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
