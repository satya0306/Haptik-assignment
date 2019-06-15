import React, { Component } from "react";
import ProductList from "../../container/ProductList.js/ProductList";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const FEED_QUERY = gql`
  {
    posts(last: 10) {
      edges {
        node {
          id
          name
          description
          media {
            url
          }
        }
      }
    }
  }
`;

class Products extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const linksToRender = data.posts.edges;
          return (
            <div>
              <ProductList node={linksToRender} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Products;
