import gql from 'graphql-tag'

export default gql`
  fragment Contact on ContactRecord {
    eMail
    facebook
    instagram
    phone
    location {
      latitude
      longitude
    }
  }
`
