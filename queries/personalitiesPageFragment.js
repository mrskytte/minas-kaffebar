import gql from 'graphql-tag'

export default gql`
  fragment PersonalitiesPage on PersonalitiesPageRecord {
    personalities {
      name
      aboutText(markdown: true)
      image {
        responsiveImage {
          src
          srcSet
        }
      }
    }
  }
`
