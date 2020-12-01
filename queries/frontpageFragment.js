import gql from 'graphql-tag'

export default gql`
  fragment Frontpage on FrontpageRecord {
    facebook
    instagram
    logo {
      url
    }
    polariodPictures {
      responsiveImage {
        srcSet
        src
      }
    }
    stopmotion {
      images {
        responsiveImage {
          src
          srcSet
        }
      }
      leftText(markdown: false)
      rightText(markdown: true)
    }
  }
`
