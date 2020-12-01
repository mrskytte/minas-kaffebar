import gql from 'graphql-tag'

export default gql`
  fragment EventPage on EventPageRecord {
    events {
      body(markdown: true)
      headline
      image {
        responsiveImage {
          src
          srcSet
        }
      }
      price
      soldOut
      time
    }
  }
`
