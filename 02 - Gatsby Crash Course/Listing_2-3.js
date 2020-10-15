import React from 'react';
import { graphql } from 'gatsby';

// this is the page
export default function Index({ data }) {
  return (
    <div>
      <h1>Welcome to {data.site.siteMetadata.title}!</h1>
    </div>
  )
}

// this is the page query
export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
