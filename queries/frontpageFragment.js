import gql from 'graphql-tag'

export default gql`
  fragment Frontpage on FrontpageRecord {
    facebook
    instagram
    logo {
      url
    }
    comeForThe {
      text
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
      leftText(markdown: true)
      rightText(markdown: true)
    }
  }
`
