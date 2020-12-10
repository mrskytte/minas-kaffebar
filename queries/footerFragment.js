import gql from 'graphql-tag'

export default gql`
  fragment Footer on FooterRecord {
    address
    facebook
    instagram
  }
`
