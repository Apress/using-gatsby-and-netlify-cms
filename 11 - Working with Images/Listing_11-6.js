import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

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
          heroImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const tagline = data.markdownRemark.frontmatter.tagline;
  const heroImage = data.markdownRemark.frontmatter.heroImage;

  return (
    <Layout>
      <BackgroundImage 
        id={styles.hero}
        fluid={heroImage.childImageSharp.fluid}>
        <h1>{tagline}</h1>
      </BackgroundImage>
      <BlogList />
    </Layout>
  );
}
