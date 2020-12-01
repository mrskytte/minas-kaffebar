import 'cross-fetch/polyfill'
import ApolloClient from 'apollo-boost'

const datoClient = new ApolloClient({
  uri: 'https://graphql.datocms.com',
  headers: {
    Authorization: `78cb2afcaeb0f2b177e3207c8c5555`,
  },
})

datoClient.defaultOptions = {
  query: {
    fetchPolicy: 'no-cache',
  },
}

export default (ctx, inject) => {
  inject('dato', (options) => {
    return datoClient.query(options)
  })
}

export { datoClient }
