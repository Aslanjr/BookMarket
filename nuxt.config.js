module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'BooksMarket',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" },
      { rel: "stylesheet",  href: "https://fonts.googleapis.com/css?family=Cormorant+Garamond&display=swap" },
      { rel: "stylesheet",  href: "https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
     'assets/main.css'
  ],
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  build: {
    /*
    ** Run ESLint on save
    */
   vendor: ['axios'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/sessions', method: 'post', propertyName: 'token' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/sessions/user', method: 'get', propertyName: 'user' }
  //       },
  //       // tokenRequired: true,
  //       // tokenType: 'bearer'
  //       // autoFetchUser: true
  //     }
  //   }
  // }
}

