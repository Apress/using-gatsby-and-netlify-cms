import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function SiteTitle() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <div>{data.site.siteMetadata.title}</div>;
}
