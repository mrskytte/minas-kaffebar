import gql from 'graphql-tag'

export default gql`
  fragment MenuPage on MenuPageRecord {
    menus {
      menu {
        ... on HeadlineRecord {
          headline
        }
        ... on MenuItemRecord {
          name
          price
        }
      }
    }
  }
`
