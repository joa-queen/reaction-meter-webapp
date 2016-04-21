require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: 'http://localhost:1337',
  app: {
    title: 'Reaction Meter',
    description: '',
    head: {
      titleTemplate: 'Reaction Meter - %s',
      meta: [
        {name: 'description', content: ''},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Reaction Meter'},
        {property: 'og:locale', content: 'es_AR'},
        {property: 'og:title', content: 'Reaction Meter'},
        {property: 'og:description', content: ''},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@joaqtor'},
        {property: 'og:creator', content: '@joaqtor'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
