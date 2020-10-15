import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';

import BlogPost from './BlogPost';

export default function BlogList() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
        ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
            }
            fields {
              slug
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
          slug={edge.node.fields.slug}
          title={edge.node.frontmatter.title}
          date={edge.node.frontmatter.date}
          excerpt={edge.node.excerpt}
        />
      ))}
      <div>
        <Link to="/blog">More &gt;&gt;</Link>
      </div>
    </div>
  );
}
