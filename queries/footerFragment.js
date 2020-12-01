import gql from 'graphql-tag'

export default gql`
  fragment FooterPage on FooterPageRecord {
    address
    facebook
    instagram
  }
`
