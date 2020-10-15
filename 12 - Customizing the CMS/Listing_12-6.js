import React from 'react';

import Layout from '../components/Layout';
import Menu from '../components/Menu';

import { graphql } from 'gatsby';

export default function MenuPage({ data }) {
  return (
    <Layout>
      <Menu data={data} />
    </Layout>
  );
}

export const query = graphql`
  {
    markdownRemark(frontmatter: { contentKey: { eq: "menu" } }) {
      frontmatter {
        title
        categories {
          name
          items {
            name
            description
            price
          }
        }
      }
    }
  }
`;
