import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import BlogList from '../components/BlogList';
import Layout from '../components/Layout';

import styles from './index.module.css';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      markdownRemark(frontmatter: { contentKey: { eq: "indexPage" } }) {
        frontmatter {
          tagline
          heroImage
        }
      }
    }
  `);

  const tagline = data.markdownRemark.frontmatter.tagline;
  const heroImage = data.markdownRemark.frontmatter.heroImage;

  return (
    <Layout>
      <div 
        id={styles.hero}
        style={{ backgroundImage: `url('${heroImage}')` }}>
        <h1>{tagline}</h1>
      </div>
      <BlogList />
    </Layout>
  );
}
