import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import BlogPost from './BlogPost';

export default function BlogList() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
            }
            excerpt
          }
        }
      }
    }
  `);

  return (
    <div>
      {data.allMarkdownRemark.edges.map(edge => (
        <BlogPost
          key={edge.node.id}
          title={edge.node.frontmatter.title}
          date={edge.node.frontmatter.date}
          excerpt={edge.node.excerpt} />
      ))}
    </div>
  );
}
