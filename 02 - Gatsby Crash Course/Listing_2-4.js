import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

export default function SiteTitle() {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div>{data.site.siteMetadata.title}</div>
      )} />
  )
}
